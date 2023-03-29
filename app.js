const express = require('express')
const os = require('os')


const app = express()

app.use('/', async(req,res) => {
  console.log('Soy un contenedor node y responde desde ${os.hostnane()}' )
  res.json({ message : 'Ok it works...', hostnane: os.hostname() })
})

app.listen(3000, () => console.log('Server on port 3000'))

