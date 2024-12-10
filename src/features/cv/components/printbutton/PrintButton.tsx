import { useState, useEffect } from "react";
import PrintDialog from "./PrintDialog";

export default function PrintButton() {
  const [showPrintDialog, setShowPrintDialog] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => setIsVisible(true), 300);
    const messageTimer = setTimeout(() => setShowInitialMessage(false), 5000);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  const handlePrint = async (selectedVersion: 'styled' | 'plain' | 'styled-no-recommendations') => {
    document.body.classList.remove('print-version-styled', 'print-version-plain', 'print-version-styled-no-recs');

    if (selectedVersion === 'styled-no-recommendations') {
      document.body.classList.add('print-version-styled-no-recommendations');
      document.body.classList.add('print-version-styled');
      console.log(document.body.classList);
    } else {
      document.body.classList.add(`print-version-${selectedVersion}`);
    }

    if (/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      await new Promise(resolve => setTimeout(resolve, 500));
    } else {
      await new Promise(requestAnimationFrame);
    }

    window.print();

    setTimeout(() => {
      document.body.classList.remove(`print-version-${selectedVersion}`);
      setShowPrintDialog(false);
    }, 500);
  };

  return (
    <div className={`
      fixed print:hidden z-50
      md:top-4 md:right-4
      bottom-8 right-0
      transform transition-all duration-[1200ms] ease-in-out
      ${isVisible ? 'translate-x-0' : 'translate-x-full'}
    `}>
      {showPrintDialog ? (
        <PrintDialog
          show={showPrintDialog}
          setShow={setShowPrintDialog}
          onPrint={handlePrint}
        />
      ) : (
        <button
          onClick={() => setShowPrintDialog(true)}
          className={`
            group relative
            md:px-5 md:py-5
            px-3 py-2
            md:rounded-md
            rounded-l-lg
            md:bg-slate-900 md:text-accent
            bg-slate-900 text-accent
            shadow-lg
            md:border-transparent
            border border-r-0 border-slate-200
            ${showPrintDialog ? 'opacity-0' : 'opacity-100'}
            overflow-hidden
            h-[50px]
            flex items-center
            transition-all duration-300 ease-in-out
          `}
          style={{
            transform: showPrintDialog ? 'scale(0.95)' : 'scale(1)',
            width: showInitialMessage ? '160px' : '50px',
            transitionDuration: '1200ms'
          }}
        >
          <div className={`
            flex items-center justify-center gap-2
            w-full relative
            transition-all duration-[1200ms] ease-in-out
          `}>
            <div className={`
              absolute left-1/2 -translate-x-1/2
              transition-all duration-[1200ms] ease-in-out
              flex items-center gap-2
              ${showInitialMessage
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
              }
            `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
                  w-5 h-5
                  transition-transform duration-300 ease-in-out
                  group-hover:scale-110
                "
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" className="animate-bounce" />
              </svg>
              <span className="whitespace-nowrap">Download me!</span>
            </div>

            <div className={`
              transition-all duration-[1200ms] ease-in-out
              ${showInitialMessage
                ? 'opacity-0 scale-75'
                : 'opacity-100 scale-100'
              }
            `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
                  w-5 h-5
                  transition-transform duration-300 ease-in-out
                  group-hover:scale-110
                "
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" className="animate-bounce" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}