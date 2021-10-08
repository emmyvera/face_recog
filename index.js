const express = require('express')
const path = require('path')
const { get } = require('request')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const viewsDir = path.join(__dirname, 'views')
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => res.redirect('/face_check0'))

app.get('/face_check', (req, res) =>
  res.sendFile(path.join(viewsDir, 'face.html')),
)

app.get('/face_check0', (req, res) =>
  res.sendFile(path.join(viewsDir, 'face_check.html')),
)

app.listen(5050, () => console.log('Listening on port 3000!'))
