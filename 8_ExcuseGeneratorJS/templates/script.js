document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generate-excuse").addEventListener("click", function() {
      fetch("http://127.0.0.1:5000/generate_excuse")
      .then(response => response.json())
      .then(data => {
        console.log("Received data:", data);
        document.getElementById("excuse").innerText = data.excuse;
      })
      .catch(error => {
        console.error("Error fetching excuse:", error);
      });
    });
  });
