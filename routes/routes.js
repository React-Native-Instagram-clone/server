const express = require("express");
const router = express.Router();
const User = require("../models/user");
const MenuHeading = require("../models/menuHeading");
const menuItem = require("../models/menuItem");
const { default: mongoose } = require("mongoose");

router.post("/addUser", async (req, res) => {
  const { name, role, status } = req.body;
  const data = new User({
    name: name,
    role: role,
    status: status,
  });

  try {
    const user = await data.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/addMenuHeading", async (req, res) => {
  const { name, status } = req.body;
  const data = new MenuHeading({
    name: name,
    status: status,
  });

  try {
    const menuHeading = await data.save();
    res.status(200).json(menuHeading);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/addMenuItem", async (req, res) => {
  const { heading, name, status } = req.body;
  const data = new menuItem({
    name: name,
    heading: new mongoose.Types.ObjectId(heading),
    status: status,
  });

  try {
    const menuItem = await data.save();
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/fetchMenuHeading", async (req, res) => {
  try {
    const menuHeadings = await MenuHeading.find({});
    res.json(menuHeadings);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
