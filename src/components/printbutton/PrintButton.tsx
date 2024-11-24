import { useState } from "react";
import PrintDialog from "./PrintDialog";

export default function PrintButton() {
  const [showPrintDialog, setShowPrintDialog] = useState(false);

  const handlePrint = (selectedVersion: 'styled' | 'plain') => {
    // Remove any existing print version classes
    document.body.classList.remove('print-version-styled', 'print-version-plain');
    // Add the selected version class
    document.body.classList.add(`print-version-${selectedVersion}`);

    // Trigger print
    window.print();

    // Clean up after printing
    setTimeout(() => {
      document.body.classList.remove(`print-version-${selectedVersion}`);
      setShowPrintDialog(false);
    }, 100);
  };

  return (
       <div className="fixed top-4 right-4 print:hidden">
        {showPrintDialog ? (
          <PrintDialog show={showPrintDialog} setShow={setShowPrintDialog} onPrint={handlePrint} />
        ) : (
          <button onClick={() => setShowPrintDialog(true)}
          className="px-4 py-2 rounded-md  bg-slate-900 text-accent hover:bg-accent hover:text-slate-900
          transition-colors flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
              <path d="M6 9L12 15L18 9" />
            </svg>
            Download
          </button>
        )}
      </div>
  );
}