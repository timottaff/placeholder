const config = require('./config')
const twit = require('twit')
const T = new twit(config)  

T.post('statuses/update', { status: 'Ini postingan oleh Node.js. Halo ke siapapun yang membaca!' }, function(err, data, response) {
    console.log(data)
  })