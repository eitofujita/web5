
        document.getElementById('calculateBtn').addEventListener('click', function() 
        {
            const quantity = document.getElementById('quantity').value;
            const productPrice = document.getElementById('product').value;
            const totalPrice = quantity * productPrice;

            document.getElementById('totalPrice').textContent = totalPrice;
        })