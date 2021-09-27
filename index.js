const userInfo = require('./information');
console.log(userInfo.user.name);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${userInfo.user.name} from ${userInfo.user.campus}`,
    e : "oO",
    T : "U "
}));