import fs from "node:fs/promises";

interface User {
  name: string;
  age: number;
  region: string;
}

type Regions = "NI" | "Scotland" | "SE" | "South" | "North";
// Dictionary type
interface Region {
  [region: string]: Array<string>;
}

interface News {
  id: string;
  headline: string;
  content: string;
}

// Promise!!

// Promise ... guarentee to do something ... at a certain time
// expecting an operation to be completed ... expecting a response

// Waiter ...
// Promise ... pending
//         ... settled -> resolved / rejected

// const prom1 = new Promise<string | Error>((resolve, reject) => {
//   // happy??
//   if (true) {
//     reject(new Error("Something went wrong!"));
//   }
//   resolve("I am happy!");
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

const user: Promise<User> = fs
  .readFile("user.json", "utf8")
  .then((data: string) => JSON.parse(data));

const regions: Promise<Region> = fs
  .readFile("regions.json", "utf8")
  .then((data: string) => JSON.parse(data));

const allNews: Promise<News[]> = fs
  .readFile("news.json", "utf8")
  .then((data: string) => JSON.parse(data));

Promise.all([user, regions, allNews]).then(([user, regions, allNews]) => {
  const userHeadlines = regions[user.region];
  const userNews = allNews.filter((article) =>
    userHeadlines.includes(article.id)
  );

  userNews.forEach((news) => {
    console.log(news.headline);
    console.log(news.content);
    console.log("-----");
  });
});

// resolved, rejected
Promise.allSettled([user, regions, allNews]).then((responses) => {
  console.log(user, regions, allNews);
  const successful = responses.filter(
    (response) => response.status === "fulfilled"
  );
  // const userHeadlines = regions[user.region];
  // const userNews = allNews.filter((article) =>
  //   userHeadlines.includes(article.id)
  // );

  // userNews.forEach((news) => {
  //   console.log(news.headline);
  //   console.log(news.content);
  //   console.log("-----");
  // });
});
