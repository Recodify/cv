import AboutMe from './components/aboutme/AboutMe';
import Experience from './components/experience/Experience';
import PreviousExperience from './components/experience/PreviousExperience';
import PrintButton from './components/printbutton/PrintButton';
import Profile from './components/profile/Profile';
import Skills from './components/skill/Skills';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center p-4 print:p-0 print:bg-white print:min-h-0">
      {/* Print Button - hidden in print */}
      <PrintButton />

      <div className="w-full max-w-7xl bg-white shadow-lg print:shadow-none print:w-[21cm]">
        <div className="flex flex-row print:flex-row min-h-screen print:min-h-0">
          {/* Sidebar - wider for web view */}
          <aside className="w-80 lg:w-80 bg-slate-900 border-r border-slate-800 print:w-72 shrink-0 print:bg-slate-900 print:force-background relative">
            <div className="p-1">
              <Profile />
            </div>
            <Skills />
            <div className="absolute inset-0 -z-10 bg-slate-900 print:fixed print:w-72"></div>
          </aside>

          {/* Main Content with page break controls */}
          <main className="flex-1 bg-white pl-8 pt-2 pr-8 pb-10 print:pt-0">
            <div className="print:break-before-auto">
              <AboutMe />
              <Experience />
              <PreviousExperience />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;


