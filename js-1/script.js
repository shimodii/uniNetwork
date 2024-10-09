let counter = 1

function counterUp(){
    counter++;
    if (counter >= 4) {
        counter = 4
    }
    console.log(counter)
}

function counterDown(){
    counter--;
    if (counter <= 1) {
        counter = 1
    }
    console.log(counter)
}

