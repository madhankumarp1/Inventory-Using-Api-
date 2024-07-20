document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost/madhan_js/api/getRecipient.php')
        .then(response => response.json())
        .then(products => {
            
            let tbody = document.querySelector('#customers tbody');

      

            products.forEach(product => {
                let row = document.createElement('tr');

                row.innerHTML = `
                    <td>${product.product}</td>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                `;

                tbody.appendChild(row);
            });
        })
});
