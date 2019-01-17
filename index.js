var http = require('http');
var express = require('express');
var app = express();
app.get('/', function (req, res){
  res.send('hello world');
});
var FBBotFramework = require('fb-bot-framework');
// Initialize
var bot = new FBBotFramework({
  page_token: 'EAAhfAqtutZAsBAFCSPT3OpqeZAdumgOqzDrpwwfasZBEXZBAf2qXM88m2DGnZADWmLrZB0AfigybkoJa6N0d7qHgK3RmWrqCjTcJEMfvcZANBiFZAtBUf2QsZAoOtYmYdgwQxAZBTCu08uBItm3syIV0gzRSRs9ZBm46JdwF4MEbwC2prkZCA1ZCrjSEy',
  verify_token: 'TUANVT_WEBHOOK_VERIFIED_561994'
});
// Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());
console.log('app is running');
// Setup listener for incoming messages
bot.on('message', function(userId, message){
  console.log(message);
  message = message.toUpperCase();
  if(message.includes('HELLO') || message.includes('HI') ||
  message.includes('CHÀO') || message.includes('CHAO'))
  {
	bot.sendTextMessage(userId, 'Chào mày!');
  } else  if(message.includes('ĐẸP TRAI') || message.includes('DEP TRAI')) {
	  bot.sendTextMessage(userId, 'Quá là đẹp trai luôn!');
  } else {
	  bot.sendTextMessage(userId, 'Óc chó!');
  }

});

//Make Express listening
app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});