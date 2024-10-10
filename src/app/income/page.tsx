// app/income/page.tsx
import Link from "next/link";
import IncomeTable from "./_components/income-table";
import { getIncomes } from "./_actions/income";

export default async function IncomePage() {
  const incomes = await getIncomes();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-dark-800 text-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Income List</h1>
        <Link href="/income/add">
          <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold">
            Add New Income
          </button>
        </Link>
      </div>
      <IncomeTable incomes={incomes} />
    </div>
  );
}
