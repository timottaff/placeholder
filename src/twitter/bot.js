const config = require('./config')
const twit = require('twit')
const T = new twit(config)  

let params = {
    q: '#CWCFinal'
}

function retweet (){
    searchTweets(params);
}
setInterval(retweet, 2000)

function searchTweets(params) {
    T.get('search/tweets', params, (err,data,response) => {
        let tweets = data.statuses
        if(!err){
            for (let dat of tweets){
                let retweetId = dat.id_str;
                postTweet(retweetId);
            }
        }  
    })
}

function postTweet(retweetId){
    T.post('statuses/retweet/:id', {
        id : retweetId
    }, responded(err,response))  
}

function responded(err,response){
    if(response)
    console.log('Retweeted!!!')
    if(err)
    console.log('Something went wrong while RETWEETING... Duplicate maybe...')
}