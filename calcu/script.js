const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Add click event to every button
buttons.forEach(button => {

    button.addEventListener("click", () => {

        let value = button.innerText;

        // Clear display
        if (value === "C") {
            display.value = "";
        }

        // Calculate result
        else if (value === "=") {

            try {
                display.value = eval(display.value);
            }

            catch {
                display.value = "Error";
            }

        }

        // Display button value
        else {
            display.value += value;
        }

    });

});