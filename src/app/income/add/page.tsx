// app/income/add.tsx

import IncomeForm from "../_components/income-form";

export default function AddIncomePage() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Add New Income</h1>
      <IncomeForm />
    </div>
  );
}
