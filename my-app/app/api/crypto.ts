import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_KEY = process.env.CMC_API_KEY; // Store API key in .env.local

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: { "X-CMC_PRO_API_KEY": API_KEY },
      params: { limit: 10, convert: "USD" },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
