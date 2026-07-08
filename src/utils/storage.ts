import type { FinancialFormData } from "../types/finance";
const STORAGE_KEY = "educador-financeiro-form";

export function saveFinancialData(data: FinancialFormData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getFinancialData(): FinancialFormData | null {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}

export function clearFinancialData() {
  localStorage.removeItem(STORAGE_KEY);
}