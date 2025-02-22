import { NextApiRequest, NextApiResponse } from "next";
import { createLoanTransaction } from "@/utils/hederaHelpers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const { amount } = req.body;
    if (!amount) return res.status(400).json({ error: "Missing loan amount" });

    const transactionId = await createLoanTransaction(amount);
    
    return res.status(200).json({ message: "Loan processed successfully", transactionId });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
