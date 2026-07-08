import { useEffect, useState } from "react";
import { ChatBot } from "./components/ChatBot";
import { Header } from "./components/Header";
import { StepForm } from "./components/StepForm";
import { ResultCard } from "./components/ResultCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { initialFinancialFormData } from "./types/finance";
import type { FinancialAnalysis, FinancialFormData } from "./types/finance";
import {
  clearFinancialData,
  getFinancialData,
  saveFinancialData,
} from "./utils/storage";
import { generateFinancialAnalysis } from "./services/geminiService";
import "./index.css";

function App() {
  const [formData, setFormData] = useState<FinancialFormData>(
    initialFinancialFormData
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [analysis, setAnalysis] = useState<FinancialAnalysis | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedData = getFinancialData();

    if (savedData) {
      setFormData(savedData);
    }

    const savedTheme = localStorage.getItem("educador-financeiro-theme");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    saveFinancialData(formData);
  }, [formData]);

  function handleChange(field: keyof FinancialFormData, value: string) {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  function isCurrentStepValid() {
    if (currentStep === 0) {
      return Number(formData.monthlyIncome) > 0;
    }

    if (currentStep === 1) {
      return (
        formData.fixedExpenses !== "" &&
        formData.variableExpenses !== "" &&
        Number(formData.fixedExpenses) >= 0 &&
        Number(formData.variableExpenses) >= 0
      );
    }

    if (currentStep === 2) {
      return formData.debts !== "" && Number(formData.debts) >= 0;
    }

    if (currentStep === 3) {
      return formData.financialGoal.trim().length >= 5;
    }

    if (currentStep === 4) {
      return formData.knowledgeLevel !== "";
    }

    return true;
  }

  function handleNext() {
    if (!isCurrentStepValid()) {
      alert("Preencha corretamente esta etapa antes de continuar.");
      return;
    }

    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  }

  function handleBack() {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  }

  async function handleSubmit() {
    if (!isCurrentStepValid()) {
      alert("Preencha corretamente esta etapa antes de gerar o diagnóstico.");
      return;
    }

    try {
      setIsLoading(true);

      const result = await generateFinancialAnalysis(formData);

      setAnalysis(result);
    } catch (error) {
      console.error(error);
      alert("Não foi possível gerar a análise. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset() {
    setFormData(initialFinancialFormData);
    setCurrentStep(0);
    setAnalysis(null);
    clearFinancialData();
  }

  function handleToggleTheme() {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      if (newMode) {
        document.body.classList.add("dark");
        localStorage.setItem("educador-financeiro-theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("educador-financeiro-theme", "light");
      }

      return newMode;
    });
  }

  return (
    <main className="app">
      <div className="container">
        <ThemeToggle
          isDarkMode={isDarkMode}
          onToggleTheme={handleToggleTheme}
        />

        <Header />

        {!analysis ? (
          <>
            <StepForm
              formData={formData}
              currentStep={currentStep}
              onChange={handleChange}
              onNext={handleNext}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />

            {isLoading && (
              <p className="loading-text">
                Gerando diagnóstico financeiro...
              </p>
            )}
          </>
        ) : (
          <ResultCard analysis={analysis} onReset={handleReset} />
        )}
      </div>

      <ChatBot />
    </main>
  );
}

export default App;