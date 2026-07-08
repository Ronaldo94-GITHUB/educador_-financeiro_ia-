import type {
  FinancialFormData,
  SimulationHistoryItem,
} from "../types/finance";

const STORAGE_KEY = "educador-financeiro-form";
const HISTORY_KEY = "educador-financeiro-history";

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

export function getSimulationHistory(): SimulationHistoryItem[] {
  const history = localStorage.getItem(HISTORY_KEY);

  if (!history) {
    return [];
  }

  return JSON.parse(history);
}

export function saveSimulationHistory(item: SimulationHistoryItem) {
  const currentHistory = getSimulationHistory();

  const updatedHistory = [item, ...currentHistory].slice(0, 5);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
}

export function clearSimulationHistory() {
  localStorage.removeItem(HISTORY_KEY);
}