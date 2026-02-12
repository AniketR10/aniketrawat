import ogs from 'open-graph-scraper';

export interface ScrapedData {
  url: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function scrapeMetaData(url: string): Promise<ScrapedData> {
  const options = { 
    url,
    fetchOptions: {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    },
    timeout: 10000, 
  };
  
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    try {
      const { result } = await ogs(options);
      
      
      const image = 
        result.ogImage && result.ogImage[0] && result.ogImage[0].url 
          ? result.ogImage[0].url 
          : "https://placehold.co/600x400/png";

      let dateStr = "Today";
      const jsonLd = result.jsonLD as any;
      
      if (jsonLd && Array.isArray(jsonLd) && jsonLd[0]?.datePublished) {
        dateStr = new Date(jsonLd[0].datePublished).toLocaleDateString("en-US", {
          month: "short", day: "numeric", year: "numeric"
        });
      } else if (result.ogDate) {
         dateStr = new Date(result.ogDate).toLocaleDateString("en-US", {
          month: "short", day: "numeric", year: "numeric"
        });
      }

      const title = (jsonLd && Array.isArray(jsonLd) && jsonLd[0]?.headline) 
        ? jsonLd[0].headline 
        : result.ogTitle || result.twitterTitle || "Untitled";

      const description = (jsonLd && Array.isArray(jsonLd) && jsonLd[0]?.description) 
        ? jsonLd[0].description 
        : result.ogDescription || result.twitterDescription || "No description available.";

      return {
        url: result.ogUrl || url,
        title,
        description,
        image,
        date: dateStr,
      };

    } catch (error: any) {
      attempts++;
      console.warn(`Attempt ${attempts} failed for ${url}: ${error.message || error}`);
      
      if (attempts >= maxAttempts) break;
      
      await delay(1000); 
    }
  }

  console.error(`Final failure scraping ${url}`);
  return {
    url,
    title: "Link Preview Unavailable",
    description: "Could not fetch data for this link.",
    image: "https://placehold.co/600x400/png",
    date: "Today"
  };
}