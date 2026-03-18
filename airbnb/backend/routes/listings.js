import express from "express";
const router = express.Router();
import Listing from "../models/Listing.js";
import { protect } from "../middleware/authMiddleware.js";
import mongoose from "mongoose";

router.post("/", protect, async (req, res) => {
  const listing = new Listing({
    ...req.body,
    host: req.user,
  });

  await listing.save();

  res.status(201).json({
    success: true,
    message: "Listings Added",
    data: listing,
  });
});

router.get("/", async (req, res) => {
  const searchTerm = req.query.q;

  const filter = searchTerm
    ? { title: { $regex: searchTerm, $options: "i" } }
    : {};

  const listing = await Listing.find(filter).populate("host", "name email");
  res.status(200).json({
    success: true,
    message: "Listing Fetched",
    data: listing,
  });
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid listing ID",
      });
    }

    const singleListing = await Listing.findById(id).populate(
      "host",
      "name email",
    );

    if (!singleListing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Single listing fetched",
      data: singleListing,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;
