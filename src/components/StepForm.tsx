import type { FinancialFormData } from "../types/finance";

type StepFormProps = {
  formData: FinancialFormData;
  currentStep: number;
  onChange: (field: keyof FinancialFormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
};

const steps = [
  "Renda mensal",
  "Gastos",
  "Dívidas",
  "Objetivo",
  "Conhecimento",
];

export function StepForm({
  formData,
  currentStep,
  onChange,
  onNext,
  onBack,
  onSubmit,
}: StepFormProps) {
  const isLastStep = currentStep === steps.length - 1;

  return (
    <section className="form-card">
      <div className="progress-area">
        <span>
          Etapa {currentStep + 1} de {steps.length}
        </span>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <h2>{steps[currentStep]}</h2>

      {currentStep === 0 && (
        <div className="field-group">
          <label>Qual é sua renda mensal?</label>
          <input
            type="number"
            placeholder="Ex: 2500"
            value={formData.monthlyIncome}
            onChange={(event) => onChange("monthlyIncome", event.target.value)}
          />
        </div>
      )}

      {currentStep === 1 && (
        <>
          <div className="field-group">
            <label>Quanto você gasta com despesas fixas?</label>
            <input
              type="number"
              placeholder="Ex: 1200"
              value={formData.fixedExpenses}
              onChange={(event) =>
                onChange("fixedExpenses", event.target.value)
              }
            />
          </div>

          <div className="field-group">
            <label>Quanto você gasta com despesas variáveis?</label>
            <input
              type="number"
              placeholder="Ex: 600"
              value={formData.variableExpenses}
              onChange={(event) =>
                onChange("variableExpenses", event.target.value)
              }
            />
          </div>
        </>
      )}

      {currentStep === 2 && (
        <div className="field-group">
          <label>Você possui dívidas ou parcelas mensais?</label>
          <input
            type="number"
            placeholder="Ex: 400"
            value={formData.debts}
            onChange={(event) => onChange("debts", event.target.value)}
          />
        </div>
      )}

      {currentStep === 3 && (
        <div className="field-group">
          <label>Qual é seu principal objetivo financeiro?</label>
          <textarea
            placeholder="Ex: quitar dívidas, guardar dinheiro, organizar o cartão..."
            value={formData.financialGoal}
            onChange={(event) => onChange("financialGoal", event.target.value)}
          />
        </div>
      )}

      {currentStep === 4 && (
        <div className="field-group">
          <label>Qual é seu nível de conhecimento financeiro?</label>
          <select
            value={formData.knowledgeLevel}
            onChange={(event) => onChange("knowledgeLevel", event.target.value)}
          >
            <option value="">Selecione uma opção</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>
      )}

      <div className="form-actions">
        <button type="button" className="secondary-button" onClick={onBack}>
          Voltar
        </button>

        {isLastStep ? (
          <button type="button" className="primary-button" onClick={onSubmit}>
            Gerar diagnóstico
          </button>
        ) : (
          <button type="button" className="primary-button" onClick={onNext}>
            Próximo
          </button>
        )}
      </div>
    </section>
  );
}