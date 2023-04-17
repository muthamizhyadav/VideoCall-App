import NavBar from "../../components/NavBar";
import React, { useState, useEffect, useRef } from "react";
import Peer from "simple-peer";
import io from "socket.io-client";
import Cookies from "js-cookie";
const socket = io("http://localhost:8080");

function Lobby() {
  const [users, setUsers] = useState([]);

  const MyVide: any = useRef();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to server");
    });
    socket.emit("login", { name: Cookies.get("name") });
    socket.on("users", (users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        {users.map((e: any) => (
          <div className="lobby-container">
            <p key={e.id}>{e.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lobby;
