type World = "world" | "BBC" | "Channel 4";
type Hello = "Hello" | "Bonjour";
type Goodbye = "Goodbye" | "Au revoir";
type Greeting = Hello | Goodbye;
type Salutation = `${Greeting} ${World}`;

type domains = "iplayer" | "sport" | "news";
type allowed_subdomain_urls = `https://${domains}.bbc.co.uk`;
type allowed_urls = `https://www.bbc.co.uk/${domains}`;

type langCodes =
  | "de"
  | "fr"
  | "en"
  | "ar"
  | "%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9";
type valid_urls = `https://qdl.qa/${langCodes}`;
