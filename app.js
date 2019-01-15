const express = require('express')
const nodemailer= require('nodemailer')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'client/build')))

app.post('/api/forms/contact', (req, res) => {
  const htmlEmail = `
    <h3>Contact</h3>
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  let mailOptions = {
    to: 'tuckerrobotigers@gmail.com',
    subject: 'Contact Message',
    text: req.body.message,
    html: htmlEmail
  }

  transporter.sendMail(mailOptions)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})