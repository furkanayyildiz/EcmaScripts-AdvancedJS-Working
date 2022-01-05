async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log("i", response);
  data.forEach((posts) => {
    console.log(posts);
  });
}
fetchPosts();
