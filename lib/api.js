export async function getApiData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
