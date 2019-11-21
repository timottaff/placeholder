const config = require('./config')
const twit = require('twit')
const T = new twit(config)  

var retweet = function () {
    var params = {
        q: '#Dog', // Hashtags to search tweets within
        result_type: 'recent',
        lang: 'en'
    }
    T.get('search/tweets', params, function (err, data) {
        if (!err) {
                var retweetId = data.statuses[0].id_str;
                T.post('statuses/retweet/:id', {
                    id: retweetId
                }, function (err, response) {
                    if (response) {
                        console.log('Retweeted!!!');
                    }
                    if (err) {
                          console.log(err);
                        console.log('Problem when retweeting. Possibly already retweeted this tweet!');
                    }
                });
        }
        else {
            console.log('Error during tweet search call');
        }
    });
};

retweet();