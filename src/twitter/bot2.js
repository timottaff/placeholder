const config = require('./config')
const twit = require('twit')
const T = new twit(config)  

T.post('statuses/update', { status: 'Postingan keempat' }, function(err, data, response) {
    console.log(data)
  })