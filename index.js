const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

const app = express();
app.get('/',(request, response) => {
    const ip = request.query.ip
    let timeZone
    const url = 'https://api.ipgeolocation.io/ipgeo?apiKey=eedfe72aebd3491b98ca081306b3069d&ip=' + ip
    
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      let ipdata = data;
      let timeZone = ipdata.time_zone.name
      response.send (`<H1>${timeZone}</H1>`)
    }).catch(function(error) {
        console.log(error);
        response.send (`<H1>Please enter a valid IP</H1>`)
    });
});

const sslServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app)

sslServer.listen(3000, () => console.log(`app avaiable on port 3000 securely 🔒`))

//app.listen(process.env.PORT || 3000, () => console.log(`app avaiable on http://localhost:3000`))