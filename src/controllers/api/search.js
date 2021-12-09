const axios = require("axios");

const API_KEY = process.env.API_KEY;

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apiKey=${API_KEY}`
    );

    return res.json({ success: true, data });
  } catch (err) {
    console.log(`[ERROR]: failed to search movie by id - ${err.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to search movie by id" });
  }
};

const searchMovieByTitle = async (req, res) => {
  try {
    const { movieTitle } = req.body;

    if (!movieTitle) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid movie title",
      });
    }

    const { data } = await axios.get(
      `https://www.omdbapi.com/?t=${encodeURI(movieTitle)}&apiKey=${API_KEY}`
    );

    return res.json({ success: true, data });
  } catch (err) {
    console.log(`[ERROR]: failed to search movie - ${err.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to search movie" });
  }
};

module.exports = {
  getMovieById,
  searchMovieByTitle,
};
