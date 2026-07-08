import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

type Message = {
  role: "user" | "bot";
  text: string;
};

function getBotResponse(question: string) {
  const normalizedQuestion = question.toLowerCase();

  if (
    normalizedQuestion.includes("dívida") ||
    normalizedQuestion.includes("divida") ||
    normalizedQuestion.includes("parcelas") ||
    normalizedQuestion.includes("cartão")
  ) {
    return "O primeiro passo é listar todas as dívidas, valores das parcelas e datas de vencimento. Depois, evite novas compras parceladas e priorize as dívidas que mais apertam seu orçamento.";
  }

  if (
    normalizedQuestion.includes("guardar") ||
    normalizedQuestion.includes("reserva") ||
    normalizedQuestion.includes("economizar")
  ) {
    return "Comece com um valor pequeno e realista. Mesmo R$ 20 ou R$ 50 por mês já ajuda a criar o hábito. O mais importante no início é a constância.";
  }

  if (
    normalizedQuestion.includes("gastos") ||
    normalizedQuestion.includes("reduzir") ||
    normalizedQuestion.includes("cortar")
  ) {
    return "Separe seus gastos em essenciais e não essenciais. Depois escolha 2 ou 3 gastos que podem ser reduzidos sem prejudicar sua rotina.";
  }

  if (
    normalizedQuestion.includes("salário") ||
    normalizedQuestion.includes("renda") ||
    normalizedQuestion.includes("ganho")
  ) {
    return "Uma boa prática é dividir sua renda entre contas essenciais, dívidas, gastos variáveis e uma pequena reserva. O ideal é acompanhar isso toda semana.";
  }

  return "Posso te ajudar com dúvidas sobre renda, gastos, dívidas, parcelas, reserva financeira e organização do orçamento. Me conte um pouco mais sobre sua situação.";
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Olá! Sou o Bot Educador Financeiro. Posso te ajudar com dúvidas sobre gastos, dívidas, parcelas e reserva financeira.",
    },
  ]);

  function handleSendMessage() {
    if (!inputValue.trim()) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      text: inputValue,
    };

    const botMessage: Message = {
      role: "bot",
      text: getBotResponse(inputValue),
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      botMessage,
    ]);

    setInputValue("");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  }

  return (
    <>
      <button className="chatbot-button" onClick={() => setIsOpen(true)}>
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <Bot size={22} />
              <div>
                <strong>Bot Educador Financeiro</strong>
                <span>Orientação simples e educativa</span>
              </div>
            </div>

            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "chatbot-message user-message"
                    : "chatbot-message bot-message"
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder="Digite sua dúvida financeira..."
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={handleSendMessage}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}