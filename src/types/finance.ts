export type FinancialFormData = {
  monthlyIncome: string;
  fixedExpenses: string;
  variableExpenses: string;
  debts: string;
  financialGoal: string;
  knowledgeLevel: string;
};

export type FinancialAnalysis = {
  diagnosis: string;
  attentionPoints: string[];
  recommendations: string[];
  nextSteps: string[];
  simpleSummary: string;
  score: number;
  scoreStatus: string;
  income: number;
  fixedExpenses: number;
  variableExpenses: number;
  debts: number;
  balance: number;
};

export type SimulationHistoryItem = {
  id: string;
  createdAt: string;
  formData: FinancialFormData;
  analysis: FinancialAnalysis;
};

export const initialFinancialFormData: FinancialFormData = {
  monthlyIncome: "",
  fixedExpenses: "",
  variableExpenses: "",
  debts: "",
  financialGoal: "",
  knowledgeLevel: "",
};