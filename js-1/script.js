var counter = 1

//buttons
const nextButton = document.getElementById("next-button")
const prevButton = document.getElementById("prev-button")

//images
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const image4 = document.getElementById("image4")

//signs
const sign1 = document.getElementById("step1-sign")
const sign2 = document.getElementById("step2-sign")
const sign3 = document.getElementById("step3-sign")
const sign4 = document.getElementById("step4-sign")

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

function checkStep(){
    switch(counter) {
        case 1:
            sign1.style.backgroundColor = "lawngreen";
            sign2.style.backgroundColor = "lightsteelblue";
            sign3.style.backgroundColor = "lightsteelblue";
            sign4.style.backgroundColor = "lightsteelblue";
            image1.style.display = "block";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "none";
            break
        case 2:
            sign1.style.backgroundColor = "lawngreen";
            sign2.style.backgroundColor = "lawngreen";
            sign3.style.backgroundColor = "lightsteelblue";
            sign4.style.backgroundColor = "lightsteelblue";
            image1.style.display = "none";
            image2.style.display = "block";
            image3.style.display = "none";
            image4.style.display = "none";

            break
        case 3:
            sign1.style.backgroundColor = "lawngreen";
            sign2.style.backgroundColor = "lawngreen";
            sign3.style.backgroundColor = "lawngreen";
            sign4.style.backgroundColor = "lightsteelblue";
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "block";
            image4.style.display = "none";
            break
        case 4:
            sign1.style.backgroundColor = "lawngreen";
            sign2.style.backgroundColor = "lawngreen";
            sign3.style.backgroundColor = "lawngreen";
            sign4.style.backgroundColor = "lawngreen";
            image1.style.display = "none";
            image2.style.display = "none";
            image3.style.display = "none";
            image4.style.display = "block";
            break
    }
}

checkStep()
prevButton.addEventListener('click', function() {
    // console.log(counter)
    counter--
    // console.log(counter)
    if (counter <= 1) {
        counter = 1
    }
    checkStep()
    // console.log(counter)
})
nextButton.addEventListener("click", function() {
    counter++
    if (counter >= 4) {
        counter = 4
    }
    checkStep()
})
