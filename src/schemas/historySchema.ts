import { boolean, object, string } from "zod";

export const historySchema = object({
  isScan: boolean(),
  data: string(),
});
