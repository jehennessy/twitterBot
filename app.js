// app.js
// Twitter Bot that finds most recent tweet with #webdev and favorites the tweet then retweets it. 

var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


// Search Parameters 
var params = {
    q: '#webdev',
    count: 1,
    result_type: 'recent',
    lang: 'en'
}

    T.get('search/tweets', params, function(err, data, response) {
        if(!err){
            let id = {id: data.statuses[0].id_str}
            T.post('favorites/create', id, function(err, response){
                if(err) {
                    console.log(err);
                } else {
                    console.log('Tweet Favorited');
                }
            })
            T.post('statuses/retweet', id, function(err, response){
                if(err){
                    console.log(err)
                } else {
                    console.log('Retweet successful!');
                }
            })
                
            
        } else {
            console.log(err);
        }
    })




