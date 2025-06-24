// socket.js
import { io } from "socket.io-client";

// ✅ Create a live connection to your backend
const socket = io("https://webrtc-v33c.onrender.com", {
  transports: ['websocket'], // optional but recommended for WebRTC
});

export default socket;
