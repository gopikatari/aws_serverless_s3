import toLower from "lodash/toLower.js";
import { argv } from "process";
import ListBuckets from "./s3_operations/list-buckets-cmd.js";
import CreateBucket from "./s3_operations/create-bucket-cmd.js";

(async () => {
  try {
    switch (toLower(argv[2])) {
      case "listbuckets":
        await ListBuckets();
        break;
      case "createbucket":
        await CreateBucket();
        break;

      default:
        break;
    }
  } catch (error) {}
})();
