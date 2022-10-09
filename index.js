const express = require("express");
const upload = require("express-fileupload");
const app = express();

app.use(upload());

app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/index.html");
});

app.post("/", (req, resp) => {
  if (req.files) {
    console.log(req.files);
    var file = req.files.file;
    var filename = file.name;
    console.log(filename);
    file.mv("./uploads" + filename, function (err) {
      if (err) {
        resp.send(err);
      } else {
        resp.send("File uploaded");
      }
    });
  }
});

app.listen(3000, () => {
  console.log("Server is Started...");
});
