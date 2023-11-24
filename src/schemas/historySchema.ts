import { object, string} from "zod";

export const historySchema = object({
  studentCode: string(),
});
