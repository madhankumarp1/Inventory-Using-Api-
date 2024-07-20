// it is fetching use data

// document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost/madhan_js/api/getProduct.php")
    .then((response) => response.json())
    .then((products) => {
      products.sort((a, b) => b.quantity - a.quantity);

      let productContainers = document.querySelectorAll(".div_card_item");
      productContainers.forEach((container, index) => {
        if (products[index]) {
          container.querySelector(".name").innerText = products[index].name;
          container.querySelector(".quantity").innerText =
            products[index].quantity;
        }
      });

      let labels = [];
      let quantities = [];
      let barColors = ["red", "green", "blue", "orange", "brown"];
      products.forEach((product) => {
        labels.push(product.name);
        quantities.push(product.quantity);
      });

      let ctx = document.getElementById("productChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Inventory",
              data: quantities,
              backgroundColor: barColors,
              //  borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
// });
