import { ListBucketsCommand } from "@aws-sdk/client-s3";
import s3Client from "../s3_utils/s3-client.js";
import get from "lodash/get.js";

const ListBuckets = async () => {
  try {
    const params = {};
    const cmd = new ListBucketsCommand(params);
    const resp = await s3Client.send(cmd);

    const buckets = get(resp, "Buckets", []);
    console.log("success", buckets);
    return buckets;
  } catch (error) {
    console.log(error);
  }
};
export default ListBuckets;
