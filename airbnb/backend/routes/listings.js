import express from "express";
const router = express.Router();
import Listing from "../models/Listing.js";
import { protect } from "../middleware/authMiddleware.js";

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
  const listing = await Listing.find();
  res.status(200).json({
    success: true,
    message: "Listing Fetched",
    data: listing,
  });
});

export default router;
