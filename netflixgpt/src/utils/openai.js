import OpenAI from "openai";
import { OPENAPI_KEY } from "./constant";

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  apiKey: OPENAPI_KEY, // This is the default and can be omitted
});

export default openai;
