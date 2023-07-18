import toLower from "lodash/toLower.js";
import { argv } from "process";
import ListBuckets from "./s3_operations/list-buckets-cmd.js";
import CreateBucket from "./s3_operations/create-bucket-cmd.js";
import InsertObject from "./s3_operations/put-object-cmd.js";

(async () => {
  try {
    switch (toLower(argv[2])) {
      case "listbuckets":
        await ListBuckets();
        break;
      case "createbucket":
        await CreateBucket();
        break;
      case "addobject":
        await InsertObject();
        break;

      default:
        console.log("ERROR", argv[2]);
        break;
    }
  } catch (error) {}
})();
