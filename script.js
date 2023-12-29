
function bmicalc() {
    const weight = Number(document.getElementById('weight').value);
    const heightinCm = Number(document.getElementById('height').value);
    const height = heightinCm / 100;

    let bmi = Math.round(weight / (height * height));

    if (bmi < 18.5) {
        const ele1 = document.getElementById('finaloutput');
        ele1.innerHTML = `Your BMI is ${bmi}, so you are UnderWeight.`;
    }
    else if (bmi > 18.5 && bmi <= 24.9) {
        const ele2 = document.getElementById('finaloutput');
        ele2.innerHTML = `Your BMI is ${bmi}, so you are Normal.`;
    }
    else if (bmi > 25 && bmi <= 29.9) {
        const ele3 = document.getElementById('finaloutput');
        ele3.innerHTML = `Your BMI is ${bmi}, so you are OverWeight.`;
    }
    else if (bmi > 30) {
        const ele4 = document.getElementById('finaloutput');
        ele4.innerHTML = `Your BMI is ${bmi}, so you are Obese.`;
    }
}