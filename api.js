const express = require("express");
const router = express.Router();

router.get("/api/json", (req, res) => {
  return res.json({
    date: Date.now(),
    randomString: Math.random().toString(36).slice(-8),
  });
});

module.exports = router;
