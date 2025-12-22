export const savedItems = [
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Dominic Preston",
    title:
      "iFixit’s FixBot helps with repairs ‘the way a master technician would’",
    description:
      'DIY repair site iFixit has launched its own app for iOS and Android, featuring its extensive library of repair guides and resources, a battery health monitor, and a new AI "FixBot" tool that\'s been trained on those same guides to help with repairs. The heart …',
    isSaved: true,
    url: "https://www.theverge.com/news/840570/ifixit-app-android-ios-fixbot-ai",
    urlToImage:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/ifixit-app-fixbot.jpg?quality=90&strip=all&crop=0%2C10.768075460045%2C100%2C78.46384907991&w=1200",
    publishedAt: "2025-12-09T12:47:32Z",
    content:
      "<ul><li></li><li></li><li></li></ul>\r\nIt arrives in the new iFixit app along with thousands of repair guides and a battery health monitor.\r\nIt arrives in the new iFixit app along with thousands of re… [+3959 chars]",
    keyword: "tech",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "David Pierce",
    title: "The Vergecast 2025 year in review",
    description:
      "When we look back on 2025, at least in tech, we'll remember it mostly as a year about AI. We had a race between OpenAI, Google, Anthropic, and others to build the best model for the most things. Nvidia became the most valuable company in the world, data cente…",
    isSaved: true,
    url: "https://www.theverge.com/podcast/840661/tech-stories-2025-ai-vergecast",
    urlToImage:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/VRG_VST_1209_Site.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    publishedAt: "2025-12-09T14:45:18Z",
    content:
      "<ul><li></li><li></li><li></li></ul>\r\nOn The Vergecast: the best, worst, biggest, and weirdest of everything that happened in a wild year in tech.\r\nOn The Vergecast: the best, worst, biggest, and wei… [+2899 chars]",
    keyword: "open AI",
  },
];

export function getItems() {
  return new Promise((resolve, reject) => resolve(savedItems));
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve(
      savedItems.push({
        source: article.source,
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        content: article.content,
        isSaved: true,
      })
    );
  });
}
