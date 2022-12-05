const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
// const harryMiddLeware = (req, res, next) => {
//   console.log(req);
//   next();
// };
// app.use(express.static(path.join(__dirname, "public")));
// app.use(harryMiddLeware);
// app.get("/", (req, res) => {
  
  // res.send("hello world"+req.params.name);
// });
app.get("/", (req, res) => {
  
  // console.log("Rajat");
  console.log(req);
  // let rajat=req.json;
  // res.send(rajat);
  // res.sendfile(path.join(__dirname,'index.html'));
  // res.status(500);
  // res.json({ harry: 34 });
});
app.listen(port, () => {
  console.log(`example app listining at http://localhost:${port}`);
});
