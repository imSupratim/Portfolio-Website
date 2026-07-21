import axios from "axios";

const API = axios.create({
  baseURL: "https://leo-chatbot-ck8z.onrender.com/api",
});

export const sendMessage = async (message) => {
  const response = await API.post("/chat", {
    message,
  });

  return response.data.reply;
};