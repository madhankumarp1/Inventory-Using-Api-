// Add_Recipient
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('updateProductForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let productName = document.getElementById('productName_updata').value.toLowerCase().trim();
    let productQuantity = document.getElementById('productQuantity_updata').value.toLowerCase().trim();
    let Recipient = document.getElementById('Recipient').value.toLowerCase().trim();
    

    // console.log(Recipient);
    if (!productName || !productQuantity || !Recipient) {
        alert("Please fill in all required fields.");
        return;
    }


    let  formData = {
        productName: productName,
        productQuantity: productQuantity,
        Recipient: Recipient
    };
    // console.log("Form Data:", formData);

    try {
        let response = await fetch('http://localhost/madhan_js/api/updateProduct.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let data = await response.json();
        console.log("Response Data:", data);
        if (data.message) {
            alert(data.message);
        } else if (data.error) {
            alert(data.error);
        }
        document.getElementById('updateProductForm').reset();
        location.reload();
    } catch (error) {
        console.error('Fetch Error:', error);
        alert('An error occurred while updating the product. Please try again later.');
    }
});

});