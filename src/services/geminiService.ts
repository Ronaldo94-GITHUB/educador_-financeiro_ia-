import type { FinancialAnalysis, FinancialFormData } from "../types/finance";

export async function generateFinancialAnalysis(
  data: FinancialFormData
): Promise<FinancialAnalysis> {
  const income = Number(data.monthlyIncome);
  const fixed = Number(data.fixedExpenses);
  const variable = Number(data.variableExpenses);
  const debts = Number(data.debts);

  const totalExpenses = fixed + variable + debts;
  const balance = income - totalExpenses;

  return {
    diagnosis:
      balance >= 0
        ? `Sua simulação mostra um saldo positivo estimado de R$ ${balance.toFixed(
            2
          )}. Isso indica que você tem margem para organizar melhor seu dinheiro.`
        : `Sua simulação mostra um saldo negativo estimado de R$ ${Math.abs(
            balance
          ).toFixed(
            2
          )}. Isso indica que seus gastos estão acima da renda informada.`,

    attentionPoints: [
      "Confira se seus gastos fixos estão ocupando uma parte muito alta da renda.",
      "Evite assumir novas parcelas antes de organizar seu orçamento.",
      "Acompanhe dívidas e gastos variáveis com frequência.",
    ],

    recommendations: [
      "Separe os gastos essenciais dos gastos que podem ser reduzidos.",
      "Defina uma meta simples para guardar dinheiro todo mês.",
      "Revise compras parceladas antes de fazer novas compras.",
    ],

    nextSteps: [
      "Anotar todos os gastos do mês.",
      "Escolher três gastos para tentar reduzir.",
      "Criar uma meta financeira simples para os próximos 30 dias.",
    ],

    simpleSummary:
      balance >= 0
        ? "Você está em uma situação que pode ser organizada com planejamento. O foco agora é controlar gastos e começar uma reserva."
        : "Primeiro você precisa equilibrar o orçamento. Reduza gastos, evite novas dívidas e reorganize suas parcelas.",
  };
}