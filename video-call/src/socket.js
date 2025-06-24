// client/src/socket.js
import { io } from "socket.io-client";

const socket = io("https://webrtc-v33c.onrender.com"); // ✅ Your Render backend URL

export default socket;
