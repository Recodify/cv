export default function PrintVersionSelect({ setSelectedVersion }: Readonly<{ setSelectedVersion: (version: 'styled' | 'styled-no-recommendations' | 'plain') => void }>) {
    return (
        <div className="">
            <div className="space-y-4">
                <button
                    onClick={() => setSelectedVersion('styled')}
                    className="w-full bg-slate-900 text-accent hover:bg-accent hover:text-slate-900 rounded-md
                        transition-all duration-200 ease-in-out
                         py-2 px-4  flex items-center justify-center gap-2">
                    Styled - As Seen
                </button>
                <button
                    onClick={() => setSelectedVersion('styled-no-recommendations')}
                    className="w-full bg-slate-900 text-accent hover:bg-accent hover:text-slate-900 rounded-md
                        transition-all duration-200 ease-in-out
                         py-2 px-4  flex items-center justify-center gap-2">
                    Styled - No Recommendations
                </button>
                <button
                    onClick={() => setSelectedVersion('plain')}
                    className="w-full bg-white text-primary px-4 py-2 rounded-md border-2 border-slate-800
                        hover:bg-accent hover:text-slate-900
                        transition-all duration-200 ease-in-out">
                    Plain Text - ATS friendly
                </button>
            </div>
        </div>
    )
}