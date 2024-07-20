// it the  pop from 

document.addEventListener('DOMContentLoaded', function () {
    let addProductBtn = document.querySelector('.Add');
    let addProductModal = document.getElementById('addProductModal');
    let  closeBtn = document.querySelector('.close');
    let updataProductBtn = document.querySelector('.Update');
    let  updataProductModal = document.getElementById('updateProductModal');
    let updataclose = document.getElementById('updataclose');

    addProductBtn.addEventListener('click', function () {
        addProductModal.style.display = 'block';
    });
    updataProductBtn.addEventListener('click', function () {
        updataProductModal.style.display = 'block';
    });


    closeBtn.addEventListener('click', function () {
        addProductModal.style.display = 'none';
        updataProductModal.style.display = 'none';
    });
    updataclose.addEventListener('click', function () {
        updataProductModal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target == addProductModal||event.target == updataProductModal) {
            addProductModal.style.display = 'none';
            updataProductModal.style.display = 'none';

            
        }
    });});

