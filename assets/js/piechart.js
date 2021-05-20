/** polarArea */
var data = {
    labels: ["Airdrop", "Sale", "Team & Dev", "Vendors & Marketing", "Community supporters"],
    datasets: [
      {
        label: "Percents %",
        backgroundColor: ["#617de0", "#ffbb00","#E87C0C", "#227e22", "#DCA101"],
        data: [15, 40, 20, 15, 10]
      }
    ]
  }
  
  new Chart(document.getElementById("token-holdings"), {
      type: 'doughnut',
      data: data,
      options: {
        title: {
          display: true,
          text: 'Distribution of token holdings'
        }
      }
  });