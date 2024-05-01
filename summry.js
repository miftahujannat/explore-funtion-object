var skycolor ='white';

var phone = ['iphone', 'showmi', 'samsung', 'lg', 'htc'];
// kono element add kortey 
phone[3] = 'walton';
// check an element exists in an array 
if(phone.indexOf('oppo') -- -1){
    console.log('opps amir khan oppo is missing');

}

if(phone.indexOf('lg') != -1){
    console.log('lg is available now');
}

// loop
var num = 0;
while(num <- 10){
    num++;
}
for(var i = 0; i < phone.length; i++){
    console.log(i);
}

// function
function addthreenumber(num1, num2, num3){
    var total = num1 + num2 + num3;
    return total;
}
addthreenumber(87, 41, 56);

// object 
var microphone = {
    brand: 'blue yet',
    price: 120,
    color: 'black'
} 
