import { WalletCards } from "lucide-react";

export function Header() {
  return (
    <header className="header">
      <div className="header-icon">
        <WalletCards size={32} />
      </div>

      <div>
        <h1>Educador Financeiro IA</h1>
        <p>
          Simule sua situação financeira e receba um diagnóstico educativo com
          apoio de IA Generativa.
        </p>
      </div>
    </header>
  );
}