const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "410a84c9b8fadcb8a78557858e6af655";
  const unit = "metric";
  const url ="https://api.openweathermap.org/data/2.5/weather?q="+query +"&appid="+apiKey+"&unit=metric";
  console.log(url);
  
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherdata = JSON.parse(data);
      const tem = weatherdata.main.temp;
      const weatherDescription = weatherdata.weather[0].description;
      const icon = weatherdata.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<p>The weather is currently"+weatherDescription+"<p>");
      res.write("<h1>The temperature in "+(query)+" is " + tem + " degrees Kelvin.</h1>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
    // res.send("hello your server started");
  });
  // console.log(req.body.cityName);
  // console.log("post request received");
});
app.listen(3000, function () {
  console.log("http://localhost:3000");
});
