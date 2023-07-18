import toLower from "lodash/toLower.js";
import { argv } from "process";
import ListBuckets from "./s3_operations/list-buckets-cmd.js";
import CreateBucket from "./s3_operations/create-bucket-cmd.js";
import InsertObject from "./s3_operations/put-object-cmd.js";
import DeleteBucket from "./s3_operations/delete-bucket-cmd.js";
import DeleteObject from "./s3_operations/delete-object-cmd.js";

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
      case "deleteobject":
        await DeleteObject(argv[3]);
        break;
      case "deletebucket":
        await DeleteBucket();
        break;

      default:
        console.log("ERROR", argv[2]);
        break;
    }
  } catch (error) {}
})();
