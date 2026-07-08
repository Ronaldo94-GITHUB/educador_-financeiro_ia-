import type { FinancialAnalysis } from "../types/finance";
import { CheckCircle, Lightbulb, ListChecks, AlertTriangle } from "lucide-react";

type ResultCardProps = {
  analysis: FinancialAnalysis;
  onReset: () => void;
};

export function ResultCard({ analysis, onReset }: ResultCardProps) {
  return (
    <section className="result-card">
      <div className="result-header">
        <Lightbulb size={32} />
        <div>
          <h2>Diagnóstico financeiro</h2>
          <p>Veja uma análise educativa baseada na sua simulação.</p>
        </div>
      </div>

      <div className="result-section">
        <h3>Resumo</h3>
        <p>{analysis.diagnosis}</p>
      </div>

      <div className="result-section">
        <h3>
          <AlertTriangle size={20} />
          Pontos de atenção
        </h3>
        <ul>
          {analysis.attentionPoints.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="result-section">
        <h3>
          <CheckCircle size={20} />
          Recomendações
        </h3>
        <ul>
          {analysis.recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="result-section">
        <h3>
          <ListChecks size={20} />
          Próximos passos
        </h3>
        <ul>
          {analysis.nextSteps.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="simple-summary">
        <strong>Explicação simples:</strong>
        <p>{analysis.simpleSummary}</p>
      </div>

      <button className="secondary-button" onClick={onReset}>
        Refazer simulação
      </button>
    </section>
  );
}