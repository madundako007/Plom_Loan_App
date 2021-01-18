const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => res.send('INDEX'))

const PORT = 3000

app.listen(PORT, console.log(`server started ${PORT}`))