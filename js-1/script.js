let counter = 1

//images
let image1 = document.getElementsByClassName("image1")
let image2 = document.getElementsByClassName("image2")
let image3 = document.getElementsByClassName("image3")
let image4 = document.getElementsByClassName("image4")

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
