import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'a12bf76a7cfbd16e500e486ba85364f0dd742494', queries,  });
export default client;
  