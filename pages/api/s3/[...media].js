import { mediaHandlerConfig, createMediaHandler } from "next-tinacms-s3/dist/handlers";
import { isAuthorized } from "@tinacms/auth";

export const config = mediaHandlerConfig;

export default createMediaHandler({
  config: {
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY || "",
      secretAccessKey: process.env.S3_SECRET_KEY || "",
    },
    region: "us-east-005",
    endpoint: "https://s3.us-east-005.backblazeb2.com",
    forcePathStyle: false,
  },
  bucket: process.env.NEXT_PUBLIC_S3_BUCKET || "",
  authorized: async (req, _res) => {
    try {
      const user = await isAuthorized(req);
      return user && user.verified;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});
