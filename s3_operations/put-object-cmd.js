import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../s3_utils/s3-client.js";
import fs from "node:fs";

const readFile = async file => {
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if (err) reject(new Error("error while reading the file"));
        if (data) resolve(data);
      });
    });
  } catch (error) {
    console.log("Unable to read the file");
  }
};

const readFileStream = async file => {
  try {
    return new Promise((resolve, reject) => {
      fs.createReadStream(file)
        .on("data", data => resolve(data))
        .on("error", err => reject(new Error("Some Exception occured")));
    });
  } catch (error) {
    console.log("Unable to read the file");
  }
};

const InsertObject = async () => {
  try {
    const file = "./index.html";
    const fileStream = await readFileStream(file);
    console.log("fileStream", fileStream);

    let params = {
      Bucket: "new-bucket-from-sdk-1992",
      Key: "index.html",
      Body: fileStream,
    };
    // console.log("params=>", params);
    console.log("uploading object", params.Key);
    const cmd = new PutObjectCommand(params);
    const resp = await s3Client.send(cmd);

    console.log("object uploaded", resp);
    return resp;
  } catch (error) {
    console.log("error in adding the object to s3");
    console.log(error);
  }
};
export default InsertObject;
