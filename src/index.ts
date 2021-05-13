import express from "express";
import { test1 } from "./lib";
import { Lib2 } from "./lib2";

const app = express();
app.listen(6000, () => {
  console.log("server running on port 6000");
  console.log("test 1", test1());
  const lib2 = new Lib2();
  console.log("test 2", lib2.test2());
});
