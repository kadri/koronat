const express = require('express')
const path = require('path')
const app = express()
const port = 4200

const _distPath = path.join(__dirname, './koronat');

app.use(express.static(_distPath));

app.use('/*', function (req, res) {
    res.sendFile(path.join(_distPath, 'index.html'));
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))