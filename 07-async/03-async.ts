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

async function run() {
  try {
    const userDataPromise: Promise<string> = fs.readFile("user.json", "utf8");

    // Read and parse the regions data
    const regionsDataPromise: Promise<string> = fs.readFile(
      "./regions.json",
      "utf8"
    );

    // Read and parse the news data
    const newsDataPromise: Promise<string> = fs.readFile("./news.json", "utf8");

    const [userDataString, regionsDataString, newsDataString] =
      await Promise.all([userDataPromise, regionsDataPromise, newsDataPromise]);

    const user: User = JSON.parse(userDataString);
    const regions: Regions = JSON.parse(regionsDataString);
    const allNews: News[] = JSON.parse(newsDataString);

    const userHeadlines = regions[user.region];
    const userNews = allNews.filter((article) =>
      userHeadlines.includes(article.id)
    );

    userNews.forEach((news) => {
      console.log(news.headline);
      console.log(news.content);
      console.log("-----");
    });
  } catch (error) {
    console.log(error);
  }
}

run();
