//number assignment. This one works. 
let myNumber = '';
let typeNumber = typeof myNumber;

if (typeNumber !== 'number'){
        console.log('This is not a number');
    } else if ((myNumber % 3 === 0) && (myNumber % 5 === 0)){
        console.log('GenBuzz');
    } else if (myNumber % 3 === 0){
        console.log('Gen');
    } else if (myNumber % 5 === 0){
        console.log('Buzz');
    } else {
    console.log(myNumber);
}

//Shop Item Tasks. This one works. 
let shopItem = '';

switch(shopItem){
    case 'Shoes':
        console.log('Shoes are $50.');
        break;
    case 'Jeans':
        console.log('Jeans are $25');
        break;
    case 'Hat':
        console.log('Hats are $12');
        break;
    case 'Socks':
        console.log('Sockes are $2');
        break;
    default:
        console.log('Invalid Item');
        break;
    }

//Random number between 50 and 100. this one works.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(50);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1) + min); 
    }

console.log(getRandomIntInclusive(50, 100));



