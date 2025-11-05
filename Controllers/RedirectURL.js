import URL from "../Models/url.js";

export const RedirectURL = async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlEntry = await URL.findOne({ shortId });

    if (!urlEntry) {
      return res.status(404).json({ message: "Short URL not found" });
    }

    res.redirect(urlEntry.longUrl);
  } catch (error) {
    console.error("Redirect error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
