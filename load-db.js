const fs = require("fs");

// Read the reports.json file
fs.readFile("src/data/reports.json", (err, data) => {
  if (err) throw err;

  // Write the contents of reports.json to db.json
  fs.writeFile("db.json", data, (err) => {
    if (err) throw err;
    console.log("db.json file created from reports.json");
  });
});
