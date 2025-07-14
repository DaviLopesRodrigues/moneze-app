import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

import { SectionSummaryCards } from "./components/organisms/SectionSummaryCards/SectionSummaryCards";
import { Button } from "./components/ui/button";
import { BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";

export function App() {
  const [income, setIncome] = useState<number>(5000);
  const [expense, setExpense] = useState<number>(2000);
  const [balance, setBalence] = useState<number>(0);
  const [investiment, setInvestiment] = useState<number>(720);

  const balanceCalculation = (): void => {
    const result = income - expense;
    setBalence(result);
  };

  useEffect(() => {
    balanceCalculation();
  }, [income, expense]);
  return (
    <div className="w-full h-screen flex flex-col items-center p-3 gap-3">
      <SectionSummaryCards
        income={income}
        expense={expense}
        balance={balance}
        investiment={investiment}
      />
    </div>
  );
}
