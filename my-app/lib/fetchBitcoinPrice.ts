export async function fetchBitcoinPrice() {
    const API_KEY = process.env.NEXT_PUBLIC_CMC_API_KEY;
    const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY as string,
          "Accept": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch Bitcoin price");
      }
  
      const data = await response.json();
      const bitcoin = data.data.find((crypto: any) => crypto.symbol === "BTC");
  
      return bitcoin ? bitcoin.quote.USD.price : null;
    } catch (error) {
      console.error("Error fetching Bitcoin price:", error);
      return null;
    }
  }
  