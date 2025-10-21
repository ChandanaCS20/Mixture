// Step 1: Get references to HTML elements
const loadBtn = document.getElementById("loadBtn");
const outputDiv = document.getElementById("output");

// Step 2: Attach click listener so when button is clicked, we fetch data
loadBtn.addEventListener("click", async () => {
  outputDiv.textContent = "Loading…"; // give feedback to user

  try {
    // Step 3: Use fetch() to make a GET request to the API endpoint
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // Step 4: Check if response status is OK (status code 200–299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Step 5: Parse the response body as JSON
    const data = await response.json();

    // Step 6: Use the fetched data (here we show it in outputDiv)
    outputDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
  } catch (error) {
    // Step 7: Handle errors (network issues, bad status, JSON parse fail)
    outputDiv.textContent = "Failed to load data: " + error;
    console.error("Fetch error:", error);
  }
});
