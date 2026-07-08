import type { SimulationHistoryItem } from "../types/finance";
import { Clock, Trash2, TrendingUp } from "lucide-react";

type SimulationHistoryProps = {
  history: SimulationHistoryItem[];
  onClearHistory: () => void;
};

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function SimulationHistory({
  history,
  onClearHistory,
}: SimulationHistoryProps) {
  if (history.length === 0) {
    return null;
  }

  return (
    <section className="history-card">
      <div className="history-header">
        <div>
          <h3>
            <Clock size={20} />
            Histórico de simulações
          </h3>
          <p>Veja suas últimas análises financeiras salvas no navegador.</p>
        </div>

        <button className="history-clear-button" onClick={onClearHistory}>
          <Trash2 size={16} />
          Limpar histórico
        </button>
      </div>

      <div className="history-list">
        {history.map((item) => (
          <article className="history-item" key={item.id}>
            <div className="history-top">
              <div>
                <strong>{formatDate(item.createdAt)}</strong>
                <span>{item.analysis.scoreStatus}</span>
              </div>

              <div className="history-score">
                <TrendingUp size={18} />
                {item.analysis.score}/100
              </div>
            </div>

            <div className="history-values">
              <span>Renda: {formatCurrency(item.analysis.income)}</span>
              <span>Fixos: {formatCurrency(item.analysis.fixedExpenses)}</span>
              <span>
                Variáveis: {formatCurrency(item.analysis.variableExpenses)}
              </span>
              <span>Dívidas: {formatCurrency(item.analysis.debts)}</span>
              <span>Saldo: {formatCurrency(item.analysis.balance)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}