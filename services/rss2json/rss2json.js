const axios = require('axios');

var parseFeed = function parseFeed(rss_url,callback){
    axios.get(createApiUrl(rss_url))
    .then(response => {
        if(response.data.status == 'error'){
           callback(response.data);
        }
        callback(response.data.items);
    })
    .catch(error => {
        console.error(error);
    });
}

function createApiUrl(rss_url){
    var url = process.env.API_URL + '?rss_url=' + rss_url + '&api_key=' + process.env.API_KEY
    return url
}

module.exports = parseFeed;
