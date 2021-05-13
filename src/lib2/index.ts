import { flatten } from "lodash";

export class Lib2 {
  test2() {
    console.log("test2 ", flatten([1, [2, [3, [4]], 5]]));
  }
}
