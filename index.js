function sendForm(formData) {
  return new Promise((resolve, reject) => {
    fetch("https://mysqft-crm.onrender.com/submit", {
      method: "POST",
      body: formData,
     // credentials: "include" // only if you need cookies
    })
    .then(response => {
      if (!response.ok) {
        reject("Server returned " + response.status);
      }
      return response.json();
    })
    .then(data => resolve(data))
    .catch(error => reject(error));
  });
}

// Usage
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);

  sendForm(formData)
    .then(data => {
      console.log("Server response:", data);
      alert("✅ " + data.message);
    })
    .catch(err => {
      console.error("Error:", err);
      alert("❌ Failed: " + "Server Error!, please try later");
    });
});
