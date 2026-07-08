import { BarChart3, Bot, FileDown, ShieldCheck, Sparkles } from "lucide-react";

type WelcomeScreenProps = {
  onStart: () => void;
};

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <section className="welcome-card">
      <div className="welcome-badge">
        <Sparkles size={18} />
        Educação financeira simples e inteligente
      </div>

      <h1>Organize sua vida financeira com apoio de tecnologia</h1>

      <p>
        Simule sua renda, gastos e dívidas para receber um diagnóstico educativo
        com score financeiro, gráfico, histórico, PDF e bot de apoio.
      </p>

      <div className="welcome-actions">
        <button className="primary-button" onClick={onStart}>
          Começar simulação
        </button>
      </div>

      <div className="welcome-features">
        <div className="welcome-feature">
          <ShieldCheck size={24} />
          <strong>Diagnóstico educativo</strong>
          <span>Entenda sua situação financeira de forma simples.</span>
        </div>

        <div className="welcome-feature">
          <BarChart3 size={24} />
          <strong>Score e gráfico</strong>
          <span>Veja renda, gastos, dívidas e saldo final.</span>
        </div>

        <div className="welcome-feature">
          <Bot size={24} />
          <strong>Bot financeiro</strong>
          <span>Tire dúvidas rápidas sobre gastos e organização.</span>
        </div>

        <div className="welcome-feature">
          <FileDown size={24} />
          <strong>Relatório em PDF</strong>
          <span>Baixe seu diagnóstico financeiro completo.</span>
        </div>
      </div>
    </section>
  );
}