let counter = 1

//buttons
let nextButton = document.getElementsByClassName("next-button")
let prevButton = document.getElementsByClassName("prev-button")

prevButton.addEventListener("click", () => {
    counter--
    if (counter <= 1) {
        counter = 1
    }
})
nextButton.addEventListener("click", () => {
    counter++
    if (counter >= 4) {
        counter = 4
    }
})

//images
let image1 = document.getElementsByClassName("image1")
let image2 = document.getElementsByClassName("image2")
let image3 = document.getElementsByClassName("image3")
let image4 = document.getElementsByClassName("image4")

//signs
let sign1 = document.getElementsByClassName("step1-sign")
let sign2 = document.getElementsByClassName("step2-sign")
let sign3 = document.getElementsByClassName("step3-sign")
let sign4 = document.getElementsByClassName("step4-sign")

// function counterUp(){
//     counter++;
//     if (counter >= 4) {
//         counter = 4
//     }
//     console.log(counter)
// }
//
// function counterDown(){
//     counter--;
//     if (counter <= 1) {
//         counter = 1
//     }
//     console.log(counter)
// }

switch(counter) {
    case 1:
        //code
        sign1.style.backgroundColor = "lawngreen";
        console.log("sign1")
        break
    case 2:
        sign2.style.backgroundColor = "lawngreen";
        console.log("sign2")
        //code
        break
    case 3:
        //code
        sign3.style.backgroundColor = "lawngreen";
        console.log("sign3")
        break
    case 4:
        //code
        sign4.style.backgroundColor = "lawngreen";
        console.log("sign4")
        break
}