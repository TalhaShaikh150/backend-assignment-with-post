const express = require("express");
const cors = require("cors");

const fs = require("fs");
const carsData = require("./MOCK_DATA.json");
const PORT = 3000;
const app = express();
app.use(cors()); // <--- THIS FIXES IT

const path = require("path");

//Fs Modules are Also Called File System Modules That Comes With Built in Node Packages
//They allow use to Do These:
// Read files

// Update files

// Delete files

// Create folders

// Read folders

//This is Called Express Plugin By Defaul Express Js Don't Know The Type Of The Data Which Is Recieving Form Post Callback Function Req.body

app.use(express.urlencoded({ extended: false }));

//This Is For Users
app.get("/cars", (req, res) => {
  let html = `
  <ul class="color">
  ${carsData.map((singleData) => `<li>${singleData.make}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

//This Will Get The Specific Car Object
app.get("/api/cars/:id", (req, res) => {
  const id = Number(req.params.id);
  const car = carsData.find((cars) => cars.id == id);
  res.json(car);
});

//This Will Return Json Object
app.get("/api/cars", (req, res) => {
  res.json(carsData);
});

//Post
app.post("/api/cars", (req, res) => {
  const body = req.body;
  carsData.push({ ...body, id: carsData.length + 1 });
  fs.writeFile(
    path.join(__dirname, "MOCK_DATA.json"),
    JSON.stringify(carsData),
    (err, data) => {
      return res.json({ status: "Success", id: carsData.length });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is Running On Port ${PORT}`);
});
