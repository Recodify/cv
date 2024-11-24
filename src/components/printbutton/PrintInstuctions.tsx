export default function PrintInstructions({ browserType }: Readonly<{ browserType: 'chrome' | 'firefox' | 'safari' | 'edge' }>) {

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

    return (
        <div className="mt-4">
            <ol className="text-sm text-primary space-y-2 mb-4 ml-4">
                <li className="flex items-start gap-2">
                    <span className="font-bold ">1.</span> Click 'Continue' below
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold ">2.</span> {getPrinterDestinationText()}
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold ">3.</span> {getPrintButtonText()}
                </li>
            </ol>
        </div>
    );
}