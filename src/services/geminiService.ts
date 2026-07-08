import type { FinancialAnalysis, FinancialFormData } from "../types/finance";

function calculateFinancialScore(
  income: number,
  fixed: number,
  variable: number,
  debts: number
) {
  const totalExpenses = fixed + variable + debts;
  const balance = income - totalExpenses;

  if (income <= 0) {
    return 0;
  }

  const expenseRatio = totalExpenses / income;
  const debtRatio = debts / income;
  const balanceRatio = balance / income;

  let score = 100;

  if (expenseRatio > 0.9) score -= 35;
  else if (expenseRatio > 0.75) score -= 25;
  else if (expenseRatio > 0.6) score -= 15;

  if (debtRatio > 0.4) score -= 30;
  else if (debtRatio > 0.25) score -= 20;
  else if (debtRatio > 0.1) score -= 10;

  if (balanceRatio < 0) score -= 30;
  else if (balanceRatio < 0.1) score -= 15;
  else if (balanceRatio < 0.2) score -= 8;

  return Math.max(0, Math.min(100, Math.round(score)));
}

function getScoreStatus(score: number) {
  if (score >= 80) return "Boa organização financeira";
  if (score >= 60) return "Atenção moderada";
  if (score >= 40) return "Situação de alerta";
  return "Prioridade alta de reorganização";
}

export async function generateFinancialAnalysis(
  data: FinancialFormData
): Promise<FinancialAnalysis> {
  const income = Number(data.monthlyIncome);
  const fixed = Number(data.fixedExpenses);
  const variable = Number(data.variableExpenses);
  const debts = Number(data.debts);

  const totalExpenses = fixed + variable + debts;
  const balance = income - totalExpenses;

  const score = calculateFinancialScore(income, fixed, variable, debts);
  const scoreStatus = getScoreStatus(score);

  return {
    score,
    scoreStatus,
    income,
    fixedExpenses: fixed,
    variableExpenses: variable,
    debts,
    balance,

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
      `Seu total estimado de gastos é R$ ${totalExpenses.toFixed(2)}.`,
      "Confira se seus gastos fixos estão ocupando uma parte muito alta da renda.",
      "Evite assumir novas parcelas antes de organizar seu orçamento.",
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