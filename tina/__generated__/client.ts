import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '581a39a6c6eebbfc1f0c5d640d71308d81a353b6', queries,  });
export default client;
  