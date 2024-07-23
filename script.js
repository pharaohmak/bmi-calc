document.querySelector("#bmi-btn").addEventListener("click", function (e) {
    // Validation!
    if (document.querySelector("#feet").reportValidity() &&
        document.querySelector("#inches").reportValidity() &&
        document.querySelector("#weight").reportValidity()) {
        // Get values from form
        let feet = parseFloat(document.querySelector("#feet").value);
        let inches = parseFloat(document.querySelector("#inches").value);
        let weight = parseFloat(document.querySelector("#weight").value);

        // Convert feet to inches for final inches total for final calc
        let totalHeightInInches = (feet * 12) + inches;

        // Calc BMI!
        let BMI = (weight / totalHeightInInches / totalHeightInInches * 703).toFixed(1);

        // Create conditional for BMI categories/results
        if (BMI < 18.5 && BMI > 0) {
            // Show text result
            document.querySelector("#result").innerHTML = `Your BMI is ${BMI}, indicating your weight is in the Under Weight Range.`;

            // Show image result
            document.querySelector("#img-result").alt = "Under Weight Range";
            document.querySelector("#img-result").src = "./assets/under-weight.png";
            document.querySelector("#img-result").style.display = "block";

        } else if (BMI >= 18.5 && BMI <= 24.9) {
            // Show text result
            document.querySelector("#result").innerHTML = `Your BMI is ${BMI}, indicating your weight is in the Normal or Healthy Weight Range.`;

            // Show image result
            document.querySelector("#img-result").alt = "Normal or Healthy Weight Range";
            document.querySelector("#img-result").src = "./assets/healthy-weight.png";
            document.querySelector("#img-result").style.display = "block";

        } else if (BMI >= 25.0 && BMI <= 29.9) {
            // Show text result
            document.querySelector("#result").innerHTML = `Your BMI is ${BMI}, indicating your weight is in the Over Weight Range.`;

            // Show image result
            document.querySelector("#img-result").alt = "Over Weight Range";
            document.querySelector("#img-result").src = "./assets/over-weight.png";
            document.querySelector("#img-result").style.display = "block";

        } else if (BMI >= 30.0 && BMI <= 34.9) {
            // Show text result
            document.querySelector("#result").innerHTML = `Your BMI is ${BMI}, indicating your weight is in the Obese Range.`;

            // Show image result
            document.querySelector("#img-result").alt = "Obese Range";
            document.querySelector("#img-result").src = "./assets/obese-weight.png";
            document.querySelector("#img-result").style.display = "block";

        } else if (BMI >= 35) {
            // Show text result
            document.querySelector("#result").innerHTML = `Your BMI is ${BMI}, indicating your weight is in the Extreme Obese Range.`;

            // Show image result
            document.querySelector("#img-result").alt = "Extreme Obese Range";
            document.querySelector("#img-result").src = "./assets/extremly-obese.png";
            document.querySelector("#img-result").style.display = "block";

        } else if ((feet == 0 && inches == 0) || weight == 0) {
            // Show text result
            document.querySelector("#result").innerHTML = `Please check the accuracy of the information you entered:<br><br>Height: ${feet} feet, ${inches} inches<br><br>Weight: ${weight} pounds`;

            // Hide image for this error message
            document.querySelector("#img-result").style.display = "none";
        }
    }
});