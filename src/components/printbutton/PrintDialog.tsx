import { useEffect, useState } from "react";
import BrowserIcon from "../browsericon/BrowserIcon";
import PrintInstructions from "./PrintInstuctions";
import PrintVersionSelect from "./PrintVersionSelect";

export default function PrintDialog({ show, setShow, onPrint }: Readonly<{ show: boolean, setShow: (show: boolean) => void, onPrint
    : (selectedVersion: 'styled' | 'plain' | 'styled-no-recommendations') => void }>) {

    const [browserType, setBrowserType] = useState<'chrome' | 'firefox' | 'safari' | 'edge'>('edge');
    const [selectedVersion, setSelectedVersion] = useState<'styled' | 'plain' | 'styled-no-recommendations'>('styled');
    const [showVersionSelect, setShowVersionSelect] = useState(true);
    const [buttonStyles, setButtonStyles] = useState('bg-slate-800 text-accent hover:bg-slate-700');

    const onVersionSelect = (version: 'styled' | 'plain' | 'styled-no-recommendations') => {
        setSelectedVersion(version);
        setShowVersionSelect(false);
        if (version === 'styled') {
            setButtonStyles('text-accent bg-slate-900 hover:bg-accent hover:text-slate-900');
        } else {
            setButtonStyles('bg-white text-primary rounded-md border-2 border-slate-800 hover:bg-accent hover:text-slate-900');
        }
    }

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

    return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    {browserType && !showVersionSelect && <BrowserIcon browser={browserType} className="w-6 h-6" />}
                    <h3 className="font-semibold text-gray-900">
                        {showVersionSelect ? 'Download as' : `To download a PDF in ${browserType.charAt(0).toUpperCase() + browserType.slice(1)}`}
                    </h3>
                </div>
                <button onClick={() => setShow(false)} className="text-gray-500 hover:text-accent text-xl font-bold">
                    ×
                </button>
            </div>
            {showVersionSelect ? (
                <PrintVersionSelect setSelectedVersion={onVersionSelect} />
            ) : (
                <>
                    <PrintInstructions browserType={browserType} />
                    <button
                        onClick={() => onPrint(selectedVersion)}
                        className={`w-full py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2 ${buttonStyles}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
                            <path d="M12 5l0 14M5 12l7 7 7-7" />
                        </svg>
                        Continue
                    </button>
                </>
            )}
        </div>
    )
}