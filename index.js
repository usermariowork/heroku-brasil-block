const express = require('express')
const express = require('cors')
const app = express()
const port = 3000
app.use(cors())


app.use(ipgeoblock({
  geolite2: "./GeoLite2-Country.mmdb",
  blockedCountries: [ "BR", "US" ]
}));

app.get('/', (req, res) => {
  res.send('Hello world heroku')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})