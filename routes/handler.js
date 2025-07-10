const express = require('express');
const router = express.Router();
const generateShortLink = require('../services/shorten');
const Link = require('../models/Link');

router.post('/shorten', async (req, res) => {
  const { url } = req.body;

  try {
    const result = await generateShortLink(url);
    res.status(200).json({ shortUrl: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const link = await Link.findOne({ shortId: req.params.id });
    if (!link) return res.status(404).json({ error: 'Link not found.' });

    if (link.expiresOn && new Date() > link.expiresOn) {
      return res.status(410).json({ error: 'Link expired.' });
    }

    link.clickCount += 1;
    await link.save();

    res.redirect(link.fullUrl);
  } catch (err) {
    res.status(500).json({ error: 'Redirection failed.' });
  }
});

module.exports = router;
