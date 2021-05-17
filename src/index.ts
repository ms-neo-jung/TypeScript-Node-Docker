import express from "express";
import { test1 } from "./lib";
// import { Lib2 } from "@src/lib2";
import { Lib2 } from "./lib2";

console.log(">> ENV ", process.env.TEST);

const app = express();
const server = app.listen(6000, () => {
  console.log("server running on port 6000");
  console.log("test 1", test1());
  const lib2 = new Lib2();
  console.log("test 2", lib2.test2());
});

// process.once("SIGUSR2", function () {
//   process.kill(process.pid, "SIGUSR2");
// });

// process.on("SIGINT", function () {
//   // this is only called on ctrl+c, not restart
//   process.kill(process.pid, "SIGINT");
// });

process.on("SIGTERM", shutDown);
process.on("SIGUSR2", shutDown);
process.on("SIGINT", shutDown);

function shutDown() {
  console.log("Received kill signal, shutting down gracefully");
  server.close(() => {
    console.log("Closed out remaining connections");
    process.exit(0);
  });

  setTimeout(() => {
    console.error(
      "Could not close connections in time, forcefully shutting down"
    );
    process.exit(1);
  }, 10000);
}
