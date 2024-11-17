document.addEventListener("DOMContentLoaded", () => {
    const quantityInput = document.getElementById("quantity");
    const productSelect = document.getElementById("product");
    const calculateBtn = document.getElementById("calculateBtn");
    const totalPriceDisplay = document.getElementById("totalPrice");

    calculateBtn.addEventListener("click", () => {
        // 入力値を取得
        const quantity = parseFloat(quantityInput.value);
        const productPrice = parseInt(productSelect.value, 10);

        // 入力のバリデーション
        if (isNaN(quantity)) {
            alert("数量を入力してください！");
            return;
        }

        if (quantity <= 0) {
            alert("数量は正の整数を入力してください！負の値やゼロは許可されていません。");
            return;
        }

        if (!Number.isInteger(quantity)) {
            alert("数量に小数点を含めることはできません！");
            return;
        }

        // 合計金額を計算
        const totalPrice = quantity * productPrice;

        // 結果を表示
        totalPriceDisplay.textContent = totalPrice;
    });
});

