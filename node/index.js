const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  //res.send('Hello World!');
  res.send('329d4feb-c5c0-4de5-b10c-701b44fbec4f');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})