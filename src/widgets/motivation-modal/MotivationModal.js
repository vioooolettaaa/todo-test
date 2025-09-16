import { useState, useEffect } from "react";
import FunIcon from "../../shared/ui/icons/FunIcon";
import NextIcon from "../../shared/ui/icons/NextIcon";
import { dataMotivation } from "./data-motivation";
import Modal from "../../shared/ui/modal/Modal";
import useAppStore from "../../store/app-store";
import "./styles.css";

const MotivationModal = () => {
  const showModal = useAppStore((state) => state.showModal);
  const closeModal = useAppStore((state) => state.closeModal);
  const [currentQuote, setCurrentQuote] = useState(0);

  // Смена цитаты каждые 10 секунд
  useEffect(() => {
    if (!showModal) return;

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % dataMotivation.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [showModal]);

  // Случайная цитата при открытии
  useEffect(() => {
    if (showModal) {
      setCurrentQuote(Math.floor(Math.random() * dataMotivation.length));
    }
  }, [showModal]);

  if (!showModal) return null;

  return (
    <Modal
      isOpen={showModal}
      onClose={closeModal}
      icon={<FunIcon width="25" height="25" />}
    >
      <div>
        <blockquote
          className="quote-text"
          dangerouslySetInnerHTML={{
            __html: dataMotivation[currentQuote].text,
          }}
        ></blockquote>
        <cite className="quote-author">
          — {dataMotivation[currentQuote].author}
        </cite>
      </div>
      <div className="quote-footer">
        <div className="quote-dots">
          {dataMotivation.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentQuote ? "active" : ""}`}
            />
          ))}
        </div>

        <button
          className="next-quote-btn"
          onClick={() => {
            setCurrentQuote((prev) => (prev + 1) % dataMotivation.length);
          }}
        >
          <NextIcon />
        </button>
      </div>
    </Modal>
  );
};

export default MotivationModal;
