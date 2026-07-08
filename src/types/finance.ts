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
};

export const initialFinancialFormData: FinancialFormData = {
  monthlyIncome: "",
  fixedExpenses: "",
  variableExpenses: "",
  debts: "",
  financialGoal: "",
  knowledgeLevel: "",
};