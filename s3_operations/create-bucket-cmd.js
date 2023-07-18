import { CreateBucketCommand } from "@aws-sdk/client-s3";
import s3Client from "../s3_utils/s3-client.js";
import get from "lodash/get.js";

const CreateBucket = async () => {
  try {
    const params = {
      Bucket: "new-bucket-from-sdk-1992",
    };
    const cmd = new CreateBucketCommand(params);
    const resp = await s3Client.send(cmd);

    console.log("CREATE BUCKET", resp);
    console.log("metadata => ", get(resp, "$metadata", {}));
    return resp;
  } catch (error) {
    console.log("Error in creating the bucket");
    console.log(error);
  }
};

export default CreateBucket;
