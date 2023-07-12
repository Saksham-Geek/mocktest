/*
3. Fetch data from the JSON placeholder API and display it in the browser. Also, implement the skeleton loader which will be displayed when the data is getting fetched. (No library should be used for implementing the skeleton loader)
*/

/*
1. fetch takes a request object as url
2. fetch returns a response object as response
*/
const skeletonLoaderElement = document.getElementById("skeleton-loader");
const dataListElement = document.getElementById("data-list");

/*
These lines of code retrieve references to the HTML elements with the IDs 'skeleton-loader' and 'data-list'. These elements will be used to display the skeleton loader and the fetched data, respectively.
*/
function showSkeletonLoader() {
  skeletonLoaderElement.innerHTML = `
    <div class="skeleton-loader" style="height: 20px; width: 200px;"></div>
    <div class="skeleton-loader" style="height: 20px; width: 300px; margin-top: 10px;"></div>
    <div class="skeleton-loader" style="height: 20px; width: 250px; margin-top: 10px;"></div>
    <div class="skeleton-loader" style="height: 20px; width: 350px; margin-top: 10px;"></div>
  `;
}
/*
This function showSkeletonLoader() is responsible for displaying the skeleton loader. It sets the innerHTML of the skeletonLoaderElement to a series of <div> elements with the .skeleton-loader class. These elements have different widths and heights, creating a visually appealing loading effect.
*/
function displayData(data) {
  skeletonLoaderElement.innerHTML = ""; // Remove the skeleton loader

  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.title;
    dataListElement.appendChild(listItem);
  });
}

/*
The displayData(data) function is used to display the fetched data. It takes the data array as a parameter, representing the posts retrieved from the JSON Placeholder API. First, it clears the innerHTML of the skeletonLoaderElement, effectively removing the skeleton loader. Then, it iterates over each item in the data array, creates a new <li> element, sets its text content to the title property of the item, and appends it as a child to the dataListElement (an unordered list).
*/

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((data) => {
    displayData(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

showSkeletonLoader(); // Display the skeleton loader initially

/*
This code section initiates the data fetching process using the fetch() function. It makes a GET request to the JSON Placeholder API's /posts endpoint. The response is then converted to JSON using the .json() method. Once the data is available, the displayData(data) function is called to display it. In case of an error, the error message is logged to the console.

Finally, showSkeletonLoader() is called initially to display the skeleton loader before the data is fetched.

When you open the HTML file in a web browser, the JavaScript code will be executed, displaying the skeleton loader first. Once the data is fetched successfully, the skeleton loader will be replaced with the fetched data displayed as a list of titles.
*/
