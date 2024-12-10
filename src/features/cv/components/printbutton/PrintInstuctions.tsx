export default function PrintInstructions({ browserType }: Readonly<{ browserType: 'chrome' | 'firefox' | 'safari' | 'edge' }>) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const getDesktopInstructions = () => {
        const printerDestination = {
            firefox: "Select 'PDF' in the Destination dropdown",
            safari: "Click the 'PDF' dropdown and select 'Save as PDF'",
            edge: "Choose 'Microsoft Print to PDF' as the printer",
            chrome: "Choose 'Save as PDF' as the printer destination",
        };

        const printButton = {
            firefox: "Click 'Save'",
            safari: "Click 'Save'",
            chrome: "Click 'Print'",
            edge: "Click 'Print'",
        };

        return (
            <ol className="text-sm text-primary space-y-2 mb-4 ml-4">
                <li className="flex items-start gap-2">
                    <span className="font-bold">1.</span> Click 'Continue' below
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">2.</span> {printerDestination[browserType]}
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">3.</span> {printButton[browserType]}
                </li>
            </ol>
        );
    };

    const getMobileInstructions = () => (
        <ol className="text-sm text-primary space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-2">
                <span className="font-bold">1.</span> Click 'Continue' below
            </li>
            <li className="flex items-start gap-2">
                <span className="font-bold">2.</span> Make sure 'Save as PDF' or 'PDF' is selected as the destination/printer.
            </li>
        </ol>
    );

    return (
        <div className="mt-4">
            {isMobile ? getMobileInstructions() : getDesktopInstructions()}
        </div>
    );
}