let myNumber = '';
typeof myNumber;

if (typeof myNumber !== number){
    console.log('This is not a number');
}else if ((myNumber % 3 === 0) && (myNumber % 5 === 0)){
    console.log('GenBuzz');
}else if (myNumber % 3 === 0){
    console.log('Gen');
}else if (myNumber % 5 === 0){
    console.log('Buzz');
}else{
    console.log(myNumber);
}


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
}

getRandomInt(min, max){
    min = Math.ceil(50);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min);
}


