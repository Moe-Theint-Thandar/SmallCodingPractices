// const textEl = document.querySelector(".container");

// const careers = ["Student", "Web Developer", "Network Engineer", "Retailer"];

// let careersIndex = 0;

// let characterIndex = 0;

// TextUpdate();

// function TextUpdate() {

//     textEl.innerHTML = `
//     <h1>I am a ${careers[
//     careersIndex
//   ].slice(0, characterIndex)}</h1>
//     `;
//     characterIndex++;
//     if (characterIndex === careers[careersIndex].length) {
//         careersIndex++;
//         characterIndex = 0;
//     }

//     if (careersIndex === careers.length) {
//         careersIndex = 0;
//     }
//     setTimeout(updateText, 400);
// }




const textEl = document.querySelector(".container");

const careers = ["Student", "Network Engineer", "Web Developer", "Retailer"];

let careerIndex = 0;

let characterIndex = 0;

TextUpdate();

function TextUpdate() {
    characterIndex++;
    textEl.innerHTML = `
    <h1>I am a ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(TextUpdate, 250);
}





// function updateText() {
//   characterIndex++;
//   containerEl.innerHTML = `
//     <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
//     careerIndex
//   ].slice(0, characterIndex)}</h1>
//     `;



//   if (careerIndex === careers.length) {
//     careerIndex = 0;
//   }
//   setTimeout(updateText, 400);
// }