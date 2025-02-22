import { useState } from "react";
import axios from "axios";

export default function LoanForm() {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [loanResult, setLoanResult] = useState<any>(null);

  const handleLoanRequest = async () => {
    setLoading(true);
    setLoanResult(null);

    try {
      const response = await axios.post("/api/request-loan", { amount });

      setLoanResult(response.data);
    } catch (error: any) {
      alert("Loan request failed: " + error.response?.data?.error || error.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg text-white mt-6">
      <h2>Request a Loan</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="p-2 rounded text-black w-full"
      />
      <button onClick={handleLoanRequest} disabled={loading} className="bg-blue-600 p-2 w-full mt-4 rounded">
        {loading ? "Processing..." : "Request Loan"}
      </button>

      {loanResult && (
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <h3>Loan Approved!</h3>
          <p>Transaction ID: {loanResult.transactionId}</p>
        </div>
      )}
    </div>
  );
}