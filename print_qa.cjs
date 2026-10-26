const fs = require("fs");
const js = fs.readFileSync("bundle.js", "utf8");

const qaIdx = js.indexOf("— Q/A");
if (qaIdx !== -1) {
  console.log("=== QA SECTION ===");
  console.log(js.slice(qaIdx, qaIdx + 4500));
}
