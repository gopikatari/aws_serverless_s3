import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../s3_utils/s3-client.js";

const DeleteObject = async filename => {
  try {
    const params = {
      Bucket: "new-bucket-from-sdk-1992",
      Key: filename,
    };
    console.log(params);
    const cmd = new DeleteObjectCommand(params);
    const resp = await s3Client.send(cmd);
    console.log("RESPONSE UPON DELETE", resp);
    return resp;
  } catch (error) {
    console.log("error in deleting the object");
  }
};

export default DeleteObject;
