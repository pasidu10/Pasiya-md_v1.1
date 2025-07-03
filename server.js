
---

*server.js* (Node.js backend)

```js
const express = require('express');
const qrcode = require('qrcode');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/qrcode', async (req, res) => {
  const { link } = req.query;
  if (!link) return res.status(400).send('Missing link param');

  try {
    const qrDataUrl = await qrcode.toDataURL(link);
    res.json({ qr: qrDataUrl });
  } catch (err) {
    res.status(500).send('Error generating QR code');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

--
