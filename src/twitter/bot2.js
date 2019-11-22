const config = require('./config')
const twit = require('twit')
const T = new twit(config)

const fetch = require('node-fetch')
//list url json
//John : https://api.myjson.com/bins/qkwxi
//Mayn : https://api.myjson.com/bins/10k7qu
//Robin : https://api.myjson.com/bins/l2y0m
let url = "https://api.myjson.com/bins/l2y0m"

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.employee.name)
    T.post('statuses/update', { status: 'Nama dia ' + data.employee.name }, function (err, data, response) {
      console.log(data)
    })
  });








