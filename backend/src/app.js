const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const http = require('http');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const logger = require('./config/logger');

const app = express();

let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server, {
  cors: {
    origin: '*',
  },
});

server.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});

// socket
let users = [];

io.on('connection', (socket) => {
  console.log(`user connected with ${socket.id}`);
  socket.on('login', (data) => {
    let val = users.findIndex((user) => {
      user.id === socket.id;
    });
    if (val === -1) {
      users.push({ name: data.name, id: socket.id });
    }
    io.emit('users', users);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    const index = users.findIndex((user) => user.id === socket.id);
    if (index !== -1) {
      users.splice(index, 1);
      io.emit('users', users);
    }
  });
});

app.use(function (req, res, next) {
  req.io = io;
  next();
});

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});
app.get('/ws', (req, res) => {
  res.sendStatus(200);
});
// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
