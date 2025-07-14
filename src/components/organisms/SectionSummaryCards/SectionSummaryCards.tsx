import { SummaryCard } from "@/components/molecules/SummaryCard/SummaryCard";
import {
  BadgeDollarSign,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
} from "lucide-react";

type SectionSummaryCardsTypes = {
  income: number;
  expense: number;
  balance: number;
  investiment: number;
};

export function SectionSummaryCards({
  income,
  expense,
  balance,
  investiment,
}: SectionSummaryCardsTypes) {
  return (
    <div className="dark *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-4 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <SummaryCard
        description="Investimento"
        amount={investiment.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
        iconBadge={<PiggyBank color="#2b7fff" />}
        footerDescription="Dinheiro investido"
        footerComplementDescription=""
      />

      <SummaryCard
        description="Receitas"
        amount={income.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
        iconBadge={<TrendingUp color="#00c950" />}
        textBadge="+12.5%"
        footerDescription=" Receita 12.5% maior"
        footerComplementDescription="Comparado ao último mês"
      />

      <SummaryCard
        description="Despesas"
        amount={expense.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
        iconBadge={<TrendingDown color="#fb2c36" />}
        textBadge="-12.5%"
        footerDescription="Despesa 12.5% menor"
        footerComplementDescription="Comparado ao último mês"
      />

      <SummaryCard
        description="Saldo"
        amount={balance.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
        iconBadge={<TrendingUpDown color="#f0b100" />}
        footerDescription={
          balance > 0 ? (
            <>
              Saldo positivo <BadgeDollarSign color="#00c950" />
            </>
          ) : (
            <>
              Saldo negativo <BadgeDollarSign color="#fb2c36" />
            </>
          )
        }
      />
    </div>
  );
}
