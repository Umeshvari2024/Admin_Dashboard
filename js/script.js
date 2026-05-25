const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});


// MOBILE SIDEBAR

const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

  sidebar.classList.toggle("active");

});


// SALES CHART

const salesChart = document.getElementById("salesChart");

new Chart(salesChart, {

  type: "bar",

  data: {

    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [{

      label: "Revenue",

      data: [12000, 19000, 30000, 25000, 32000, 40000],

      backgroundColor: "#2563eb",

      borderRadius: 10

    }]

  },

  options: {

    responsive: true,

    plugins: {

      legend: {

        display: true

      }

    }

  }

});


// USER GROWTH CHART

const userChart = document.getElementById("userChart");

new Chart(userChart, {

  type: "line",

  data: {

    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    datasets: [{

      label: "Users",

      data: [200, 400, 350, 500, 700, 850],

      borderColor: "#22c55e",

      backgroundColor: "transparent",

      tension: 0.4,

      fill: false

    }]

  },

  options: {

    responsive: true,

    plugins: {

      legend: {

        display: true

      }

    }

  }

});