function costCalculate() { // Calculate the cost of petrol
    // Get the values from the input fields
    // If the user does not enter a value, use the default value of 1.72
    // If the user does not enter a value, use the default value of 0
    // Calculate the total cost of petrol   
    var price = 0;
    var purchased = 0;
    var total = 0;
    if (document.getElementById("costPetrol").value == "") {
        price = 1.72;
    } else {
        price = parseFloat(document.getElementById("costPetrol").value);
    }
    if (document.getElementById("litersPurchased").value == "") {
        purchased = 0;
    } else {
        purchased = parseFloat(document.getElementById("litersPurchased").value);
    }
    total = price * purchased;
    document.getElementById("total").innerHTML = total.toFixed(2) + " " + "AED";
}
