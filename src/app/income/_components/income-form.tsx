// components/IncomeForm.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Income {
  id?: string;
  source?: string;
  amount?: string;
}

export default function IncomeForm({ income }: { income?: Income }) {
  const [source, setSource] = useState(income?.source || "");
  const [amount, setAmount] = useState(income?.amount || "");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = { source, amount: parseFloat(amount) };
    console.log(body);
    if (income?.id) {
    } else {
    }
    router.push("/income");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="source" className="block mb-2 text-sm font-medium">
          Source
        </label>
        <input
          type="text"
          id="source"
          className="w-full p-2.5 bg-gray-700 text-white rounded-lg"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="amount" className="block mb-2 text-sm font-medium">
          Amount
        </label>
        <input
          type="text"
          id="amount"
          className="w-full p-2.5 bg-gray-700 text-white rounded-lg"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-black font-semibold bg-yellow-500 hover:bg-yellow-600 rounded-lg"
      >
        {income?.id ? "Update Income" : "Add Income"}
      </button>
    </form>
  );
}
