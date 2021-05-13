import { chunk } from "lodash";

export function test1() {
  return chunk(["a", "b", "c", "d"], 2);
}
