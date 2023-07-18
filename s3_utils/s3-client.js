import { S3Client } from "@aws-sdk/client-s3";

const params = {
  region: "us-east-1",
};

const s3Client = new S3Client(params);

export default s3Client;
