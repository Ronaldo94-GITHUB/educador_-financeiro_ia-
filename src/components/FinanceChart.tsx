import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { FinancialAnalysis } from "../types/finance";

type FinanceChartProps = {
  analysis: FinancialAnalysis;
};

export function FinanceChart({ analysis }: FinanceChartProps) {
  const chartData = [
    {
      name: "Renda",
      value: analysis.income,
    },
    {
      name: "Fixos",
      value: analysis.fixedExpenses,
    },
    {
      name: "Variáveis",
      value: analysis.variableExpenses,
    },
    {
      name: "Dívidas",
      value: analysis.debts,
    },
    {
      name: "Saldo",
      value: analysis.balance,
    },
  ];

  return (
    <div className="finance-chart-card">
      <div className="finance-chart-header">
        <h3>Gráfico financeiro</h3>
        <p>Comparativo entre renda, gastos, dívidas e saldo final.</p>
      </div>

      <div className="finance-chart">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              formatter={(value) =>
                `R$ ${Number(value).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              }
            />
            <Bar dataKey="value" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}