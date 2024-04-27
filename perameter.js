function bringsingara(taka){
    console.log('singara ar jonno dise',taka);
    console.log('mama singara den', taka)
    var singaraprice = 10;
    var singaraquntity = taka / singaraprice;
    return singaraquntity;

}
var money = 100;
var singara = bringsingara(money); 
console.log('ai nen singera',singara);
