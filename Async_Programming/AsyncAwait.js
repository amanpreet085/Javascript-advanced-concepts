async function fetchProducts() {
  console.log("entered async function");
  // once fetch is resolved response gets it's value
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );

  console.log("response is");
  console.log(response);

  // once .json is resolved, data gets it's value
  const data = await response.json();

  console.log(data);

  console.log("hello");
}

console.log("this is 1");
fetchProducts();
console.log("this is 2");
console.log("this is 3");

/*
output 

this is 1 AsyncAwait.js:19:9
entered async function AsyncAwait.js:2:11
this is 2 AsyncAwait.js:21:9
this is 3 AsyncAwait.js:22:9
response is AsyncAwait.js:8:11
Response { type: "cors", url: "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json", redirected: false, status: 200, ok: true, statusText: "", headers: Headers(5), body: ReadableStream, bodyUsed: false }
AsyncAwait.js:9:11
Array(12) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
AsyncAwait.js:14:11
hello
*/
