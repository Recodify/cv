import { useEffect, useState } from "react";
import BrowserIcon from "../browsericon/BrowserIcon";
import PlainTextCV from '../plaintext/PlainTextCV';
import ReactDOM from 'react-dom/client';

export default function PrintButton() {
    const [showInstructions, setShowInstructions] = useState(false);
    const [browserType, setBrowserType] = useState<'chrome' | 'firefox' | 'safari' | 'edge'>('edge');
    const [format, setFormat] = useState<'standard' | 'plain'>('standard');

    useEffect(() => {
        // Detect browser
        const userAgent = navigator.userAgent;
        if (userAgent.includes('Chrome')) {
          setBrowserType('chrome');
        } else if (userAgent.includes('Firefox')) {
          setBrowserType('firefox');
        } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
          setBrowserType('safari');
        } else if (userAgent.includes('Edg')) {
          setBrowserType('edge');
        }
      }, []);

    const getPrinterDestinationText = () => {
      switch (browserType) {
        case 'firefox':
          return "Select 'PDF' in the Destination dropdown";
        case 'safari':
          return "Click the 'PDF' dropdown and select 'Save as PDF'";
        case 'edge':
          return "Choose 'Microsoft Print to PDF' as the printer";
        default: // chrome and others
          return "Choose 'Save as PDF' as the printer destination";
      }
    };

    const getPrintButtonText = () => {
      switch (browserType) {
        case 'firefox':
            return "Click 'Save'";
        case 'safari':
          return "Click 'Save'";
        default: // chrome, edge, and others
          return "Click 'Print'";
      }
    };

    const handlePrint = () => {
      if (!showInstructions) {
        setShowInstructions(true);
        return;
      }

      if (format === 'plain') {
        // Create container for ATS version
        const printContainer = document.createElement('div');
        printContainer.className = 'print-container';
        document.body.appendChild(printContainer);

        // Add class to body for print styles
        document.body.classList.add('printing-ats');

        // Render plain text version
        const root = ReactDOM.createRoot(printContainer);
        root.render(<PlainTextCV />);

        // Wait for render and print
        setTimeout(() => {
          window.print();

          // Cleanup after print dialog closes
          window.addEventListener('afterprint', () => {
            document.body.removeChild(printContainer);
            document.body.classList.remove('printing-ats');
          }, { once: true });
        }, 100);
      } else {
        window.print();
      }
    };

    return (
      <div className="fixed top-4 right-4 print:hidden">
        {!showInstructions ? (
          <button
            onClick={handlePrint}
            className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors flex items-center gap-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path d="M6 9L12 15L18 9" />
            </svg>
            Download
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {browserType && <BrowserIcon browser={browserType} className="w-6 h-6" />}
                <h3 className="font-semibold text-gray-900">Download Options</h3>
              </div>
              <button
                onClick={() => setShowInstructions(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 mb-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setFormat('standard')}
                  className={`flex-1 py-2 px-3 rounded ${
                    format === 'standard'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Standard PDF
                </button>
                <button
                  onClick={() => setFormat('plain')}
                  className={`flex-1 py-2 px-3 rounded ${
                    format === 'plain'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  ATS-Friendly
                </button>
              </div>

              <ol className="text-sm text-gray-600 space-y-2 mb-4 ml-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">1.</span> Click 'Continue' below
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">2.</span> {getPrinterDestinationText()}
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">3.</span> {getPrintButtonText()}
                </li>
              </ol>
            </div>

            <button
              onClick={handlePrint}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="animate-bounce"
              >
                <path d="M12 5l0 14M5 12l7 7 7-7" />
              </svg>
              Continue
            </button>
          </div>
        )}
      </div>
    );
  }