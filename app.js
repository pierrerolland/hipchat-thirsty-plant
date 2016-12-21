var gpio = require('pi-gpio');
var hipchatCredentials = require('./hipchat.json');
var request = require('request');

var hipchatUrl = 'https://' + hipchatCredentials.host + '.hipchat.com/v2/room/' + hipchatCredentials.roomId + '/notification?auth_token=' + hipchatCredentials.token;
var on = 0;

setInterval(function() {
    gpio.open(11, 'input', function(err) {
        gpio.read(11, function(err, value) {
            if (err) {
                console.log('error reading pin');
            }
            if (value !== on) {
                on = value;
		request({
                    method: 'POST',
                    body: JSON.stringify({
                        color: on ? 'red' : 'green', 
                        message: on ? 'g soif' : 'g pu soif', 
                        notify: true, 
                        message_format: 'text'
                    }),
                    url: hipchatUrl,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, function(error, response, body) {
                    if (error) {
                        console.log(error);
                    }
                });
            }
            gpio.close(11);
        });
    });
}, 2000);
