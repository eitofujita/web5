document.addEventListener("DOMContentLoaded", function() {
    const productSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultDisplay = document.getElementById("result");

  
    calculateBtn.addEventListener("click", function() {
       
        const price = parseInt(productSelect.value);
        const quantity = parseInt(quantityInput.value);

       
        if (isNaN(quantity) || quantity < 1) {
            resultDisplay.textContent = "Введите корректное количество.";
            return;
        }

        const totalCost = price * quantity;
        resultDisplay.textContent = `Общая стоимость заказа: ${totalCost} руб.`;
    });
});
