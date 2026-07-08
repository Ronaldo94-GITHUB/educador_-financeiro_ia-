import type { FinancialAnalysis } from "../types/finance";
import {
  AlertTriangle,
  CheckCircle,
  Download,
  Gauge,
  Lightbulb,
  ListChecks,
} from "lucide-react";
import { FinanceChart } from "./FinanceChart";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type ResultCardProps = {
  analysis: FinancialAnalysis;
  onReset: () => void;
};

export function ResultCard({ analysis, onReset }: ResultCardProps) {
  async function handleDownloadPdf() {
    const element = document.getElementById("financial-report");

    if (!element) {
      alert("Não foi possível encontrar o relatório.");
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const imageData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imageWidth = pageWidth;
    const imageHeight = (canvas.height * imageWidth) / canvas.width;

    let heightLeft = imageHeight;
    let position = 0;

    pdf.addImage(imageData, "PNG", 0, position, imageWidth, imageHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imageHeight;
      pdf.addPage();
      pdf.addImage(imageData, "PNG", 0, position, imageWidth, imageHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("diagnostico-financeiro.pdf");
  }

  return (
    <section className="result-card" id="financial-report">
      <div className="result-header">
        <Lightbulb size={32} />
        <div>
          <h2>Diagnóstico financeiro</h2>
          <p>Veja uma análise educativa baseada na sua simulação.</p>
        </div>
      </div>

      <div className="score-card">
        <div className="score-icon">
          <Gauge size={30} />
        </div>

        <div className="score-content">
          <span>Score financeiro</span>
          <strong>{analysis.score}/100</strong>
          <p>{analysis.scoreStatus}</p>
        </div>
      </div>

      <FinanceChart analysis={analysis} />

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

      <div className="result-actions">
        <button className="primary-button" onClick={handleDownloadPdf}>
          <Download size={18} />
          Baixar PDF
        </button>

        <button className="secondary-button" onClick={onReset}>
          Refazer simulação
        </button>
      </div>
    </section>
  );
}