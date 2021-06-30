import { io } from "socket.io-client";
const sio = io("http://localhost:8000");

sio.on("connect", () => {
  console.log("connected");
  sio.emit("sum", { numbers: [1, 2] }, (result) => {
    console.log(result);
  });
  console.log("sent");
});

sio.on("disconnect", () => {
  console.log("disconnected");
});

/* sio.on("sum_result", (data) => {
    console.log(data);
}) */

const actions = {};

const getters = {};

const mutations = {};

const state = {};

export default {
  actions,
  getters,
  mutations,
  state,
};
