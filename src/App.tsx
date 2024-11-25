import AboutMe from './components/aboutme/AboutMe';
import Experience from './components/experience/Experience';
import PreviousExperience from './components/experience/PreviousExperience';
import PrintButton from './components/printbutton/PrintButton';
import Profile from './components/profile/Profile';
import Skills from './components/skill/Skills';
import PlainTextCV from './components/plaintext/PlainTextCV';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center print:p-0 print:bg-white print:min-h-0 relative">
      <PrintButton />

      {/* Styled Version */}
      <div className="block print-version-plain:hidden md:p-4">
        <div className="w-full max-w-7xl bg-white shadow-lg print:shadow-none print:w-[21cm]">
          {/* Use flex-col on mobile, flex-row on larger screens */}
          <div className="flex flex-col md:flex-row min-h-screen print:flex-row print:min-h-0">
            {/* Sidebar - full width on mobile, side on desktop */}
            <aside className="w-full md:w-76 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 print:w-76 shrink-0 print:bg-slate-900 print:force-background relative">
              <div className="p-4 md:p-8">
                <Profile />
              </div>
              <Skills />
              <div className="absolute inset-0 -z-10 bg-slate-900 print:fixed print:w-76"></div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white px-5 pb-5 sm:p-6 md:pl-8 md:pr-8 print:pt-0">
              <div className="print:break-before-auto">
                <AboutMe />
                <Experience />
                <PreviousExperience />
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Plain Text Version */}
      <div className="hidden print-version-plain:block w-full max-w-4xl mx-auto p-4 print:p-8">
        <PlainTextCV />
      </div>
    </div>
  );
}

export default App;


