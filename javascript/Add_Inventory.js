
// it add the product to the db 
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('addProductForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    let productName = document.getElementById('productName').value.toLowerCase().trim();
    let productQuantity = document.getElementById('productQuantity').value.toLowerCase().trim();


//     // let obj = { "name": productName, "quantity":productQuantity};
//     // let myJSON = JSON.stringify(obj);
//     // console.log(myJSON);

    let data = {
        name: productName,
        quantity: productQuantity
    };
    // console.log(data);

    try {
        let response = await fetch('http://localhost/madhan_js/api/addProduct.php', {
            method: 'POST',
     
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let result = await response.json();
        console.log(result);
        alert(result.message);
        document.getElementById('addProductForm').reset();
        location.reload();

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
});