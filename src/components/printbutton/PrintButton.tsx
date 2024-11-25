import { useState } from "react";
import PrintDialog from "./PrintDialog";

export default function PrintButton() {
  const [showPrintDialog, setShowPrintDialog] = useState(false);

  const handlePrint = async (selectedVersion: 'styled' | 'plain') => {
    // Remove any existing print version classes
    document.body.classList.remove('print-version-styled', 'print-version-plain');
    // Add the selected version class
    document.body.classList.add(`print-version-${selectedVersion}`);

    // Add a longer delay for mobile devices
    if (/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      await new Promise(resolve => setTimeout(resolve, 500));
    } else {
      await new Promise(requestAnimationFrame);
    }

    // Trigger print
    window.print();

    // Clean up after printing with a longer timeout for mobile
    setTimeout(() => {
      document.body.classList.remove(`print-version-${selectedVersion}`);
      setShowPrintDialog(false);
    }, 500);
  };

  return (
    <div className="fixed top-4 right-4 print:hidden z-50">
      {showPrintDialog ? (
        <PrintDialog show={showPrintDialog} setShow={setShowPrintDialog} onPrint={handlePrint} />
      ) : (
        <button
          onClick={() => setShowPrintDialog(true)}
          className="px-4 py-2 rounded-md
          md:bg-slate-900 md:text-accent
          bg-white text-slate-900
          hover:bg-accent hover:text-slate-900
          transition-colors flex items-center gap-2 shadow-lg
          border border-slate-200 md:border-transparent"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
            <path d="M6 9L12 15L18 9" />
          </svg>
          Download
        </button>
      )}
    </div>
  );
}