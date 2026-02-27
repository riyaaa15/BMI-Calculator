let heightInput  = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let calculateBMI = document.querySelector(".calculate");
let result = document.querySelector("#result");
let category = document.querySelector(".category");
let resultBox = document.querySelector(".result-box");

heightInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        weightInput.focus();
    }
});

weightInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        calculateBMI.click();
    }
});

calculateBMI.addEventListener("click", () => {

    let height = parseFloat(heightInput.value.trim());
    let weight = parseFloat(weightInput.value.trim());

    if(!height || !weight || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight");
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);
    result.textContent = bmi.toFixed(2);
    resultBox.style.display = "block";

    if(bmi < 18.5){
        category.textContent = "Category: Underweight";
        category.style.background ="#5eb93cb3";
    } else if(bmi < 25) {
        category.textContent = "Category: Normal Weight";
        category.style.background ="#fec719b3";
    } else{
        category.textContent = "Category: Overweight";
        category.style.background ="#f36b12b3";
    }
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    heightInput.value = "";
    weightInput.value = "";
    result.textContent = "";
    category.textContent = "Your Category:";
    category.style.background = "#c6e0f3b3";
    heightInput.focus();
    resultBox.style.display = "none";
})