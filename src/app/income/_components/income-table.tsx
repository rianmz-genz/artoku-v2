// components/IncomeTable.tsx
import { Income } from "@prisma/client";
import Link from "next/link";

export default function IncomeTable({ incomes }: { incomes: Income[] }) {
  return (
    <div className="mt-6">
      <table className="min-w-full text-left text-sm font-light bg-dark-800 text-white rounded-lg shadow-lg">
        <thead className="border-b font-medium">
          <tr>
            <th className="px-6 py-4">Source</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income) => (
            <tr key={income.id} className="border-b border-dark-600">
              <td className="whitespace-nowrap px-6 py-4">{income.source}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {income.amount.toFixed(2)}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{}</td>
              <td className="whitespace-nowrap px-6 py-4 flex gap-4">
                <Link href={`/income/edit/${income.id}`}>
                  <button className="text-blue-500 hover:text-blue-600">
                    Edit
                  </button>
                </Link>
                <form method="POST" action={`/income/delete/${income.id}`}>
                  <button className="text-red-500 hover:text-red-600">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
