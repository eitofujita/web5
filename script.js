document.addEventListener("DOMContentLoaded", () => {
    const quantityInput = document.getElementById("quantity");
    const productSelect = document.getElementById("product");
    const calculateBtn = document.getElementById("calculateBtn");
    const totalPriceDisplay = document.getElementById("totalPrice");

    calculateBtn.addEventListener("click", () => {
   
        const quantity = parseFloat(quantityInput.value);
        const productPrice = parseInt(productSelect.value, 10);

       
        if (isNaN(quantity)) {
            alert("Пожалуйста, введите количество!");
            return;
        }

        if (quantity <= 0) {
            alert("Количество должно быть положительным целым числом! Отрицательные значения и ноль не допускаются.");
            return;
        }

        if (!Number.isInteger(quantity)) {
            alert("Количество не может содержать десятичные числа!");
            return;
        }

        
        const totalPrice = quantity * productPrice;

        
        totalPriceDisplay.textContent = totalPrice;
    });
});
