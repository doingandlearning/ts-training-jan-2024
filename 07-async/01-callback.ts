import fs from "node:fs";

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

// Callback Hell!!
fs.readFile("user.json", "utf8", (error: Error | null, userData: string) => {
  if (error) {
    console.log(error);
    return;
  }
  const user: User = JSON.parse(userData);

  fs.readFile(
    "regions.json",
    "utf8",
    (error: Error | null, regionData: string) => {
      if (error) {
        console.log(error);
        return;
      }
      const regions: Region = JSON.parse(regionData);
      fs.readFile(
        "news.json",
        "utf8",
        (error: Error | null, newsData: string) => {
          if (error) {
            console.log(error);
            return;
          }
          const allNews: News[] = JSON.parse(newsData);
          const userHeadlines = regions[user.region];
          const userNews = allNews.filter((article) =>
            userHeadlines.includes(article.id)
          );

          userNews.forEach((news) => {
            console.log(news.headline);
            console.log(news.content);
            console.log("-----");
          });
        }
      );
    }
  );
});
