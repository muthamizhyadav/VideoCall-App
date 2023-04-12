import instance from "../axios";

export const Userregister = async (data: any) => {
  try {
    const response = await instance.post("/v1/auth/register", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const UserLogin = async (data: any) => {
  try {
    const response = await instance.post("/v1/auth/login", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
