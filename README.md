# hipchat-thirsty-plant
Node app to send Hipchat notifications from a Raspberry Pi when your plant is thirsty

## Set up your Raspberry
First, you'll need a hygrometer.
Download Raspbian, put it on the SD card, plug everything and turn it on. Once on it, install git, npm, nodejs. 
Wire the hygrometer as explained here : https://www.modmypi.com/blog/raspberry-pi-plant-pot-moisture-sensor-with-email-notification-tutorial

## Install
```
git clone https://github.com/pierrerolland/hipchat-thirsty-plant
cd hipchat-thirsty-plant
npm install
sudo node app.js
```

Create a `hipchat.json` at root containing a JSON object with the roomId, the token and the Hipchat host name (`host`).

Put the hygrometer in a plant and it will send hipchat notifications when it's thirsty in a poor French phone texting language.
