export default async function fakeFetch(url: string) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 1000);
  });
  if (url === "http://error.com") throw Error("network error");
  return Buffer.from("some data");
}
