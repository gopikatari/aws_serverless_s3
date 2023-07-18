import { DeleteBucketCommand } from "@aws-sdk/client-s3";
import s3Client from "../s3_utils/s3-client.js";
import get from "lodash/get.js";

const DeletBucket = async () => {
  try {
    const params = {
      Bucket: "new-bucket-from-sdk-1992",
    };
    const cmd = new DeleteBucketCommand(params);
    const resp = await s3Client.send(cmd);

    console.log("DELETE BUCKET", resp);
    console.log("metadata => ", get(resp, "$metadata", {}));
    return resp;
  } catch (error) {
    console.log("Error in deleting the bucket");
    console.log(error);
  }
};

export default DeletBucket;
