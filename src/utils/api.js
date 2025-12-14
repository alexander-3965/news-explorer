export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
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
        url: "https://www.theverge.com/podcast/840661/tech-stories-2025-ai-vergecast",
        urlToImage:
          "https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/VRG_VST_1209_Site.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
        publishedAt: "2025-12-09T14:45:18Z",
        content:
          "<ul><li></li><li></li><li></li></ul>\r\nOn The Vergecast: the best, worst, biggest, and weirdest of everything that happened in a wild year in tech.\r\nOn The Vergecast: the best, worst, biggest, and wei… [+2899 chars]",
        keyword: "open AI",
      },
    ])
  );
}

export function saveArticles(article) {
  return new Promise((resolve, reject) => {
    resolve(
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Mike Fazioli",
        title:
          "Samsung, Apple, and Google Phones Are Practically Free as Mint Mobile Extends Its Black Friday Promo Longer Than Planned",
        description:
          "Switch to Mint Mobile's unlimited talk and text and high-speed data for just $15 per month and add one of these great phones at incredible prices, now through Dec. 31.",
        url: "https://gizmodo.com/samsung-apple-and-google-phones-are-practically-free-as-mint-mobile-extends-its-black-friday-promo-longer-than-planned-2000696618",
        urlToImage:
          "https://gizmodo.com/app/uploads/2025/12/Mint-Mobile-1200x675.jpg",
        publishedAt: "2025-12-09T12:30:45Z",
        content:
          "The countdown to 2026 is also your countdown for cashing in one one of four incredible new smartphone offers from Mint Mobile. From now through Dec. 31, Mint Mobile is offering amazing deals to new s… [+6252 chars]",
        keyword: "Mint",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Mike Pearl",
        title:
          "The Letterboxd ‘Video Store’ Will Open on Wednesday and Looks Awesome",
        description: "Let us all give our money to Letterboxd.",
        url: "https://gizmodo.com/the-letterboxd-video-store-will-open-on-wednesday-and-looks-awesome-2000696606",
        urlToImage:
          "https://gizmodo.com/app/uploads/2025/12/letterboxd-1200x675.jpg",
        publishedAt: "2025-12-09T10:30:11Z",
        content:
          "The Letterboxd “Video Store” will open on Wednesday, December 10. Let’s fucking go. \r\nAs my Gizmodo colleague, Lucas Ropek, wrote last month when this feature was announced:\r\nIts certainly a pleasant… [+3260 chars]",
      }
    );
  });
}
