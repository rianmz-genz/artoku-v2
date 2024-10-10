import { prisma } from "@/lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";

export async function getIncomes() {
  const incomes = await prisma.income.findMany({
    orderBy: { date: "desc" },
  });
  return incomes;
}
