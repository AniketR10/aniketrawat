import ogs from 'open-graph-scraper';

export interface ScrapedData {
  url: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

export async function scrapeMetaData(url: string): Promise<ScrapedData> {
  const options = { url };
  
  try {
    const { result } = await ogs(options);
    

    const image = 
      result.ogImage && result.ogImage[0] && result.ogImage[0].url 
        ? result.ogImage[0].url 
        : "https://placehold.co/600x400/png";


    let dateStr = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });

    
    const jsonLd = result.jsonLD as any;

    if (jsonLd && Array.isArray(jsonLd) && jsonLd[0]?.datePublished) {
      dateStr = new Date(jsonLd[0].datePublished).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    } else if (result.ogDate) {
       dateStr = new Date(result.ogDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    }

    return {
      url: result.ogUrl || url,
      title: jsonLd[0].headline || "Untitled",
      description: jsonLd[0].description || "No description available.",
      image: image,
      date: dateStr,
    };
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return {
      url,
      title: "Link Preview Unavailable",
      description: "Could not fetch data for this link.",
      image: "https://placehold.co/600x400/png",
      date: "Today"
    };
  }
}