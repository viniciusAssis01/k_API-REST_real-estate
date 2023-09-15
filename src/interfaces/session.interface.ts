import { z } from "zod";

import * as S from "../schemas";

export type TSessionCreate = z.infer<typeof S.sessionSchema>;

export type TSessionReturn = {
  token: string;
};
