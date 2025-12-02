import '/styles/globals.css';

export const metadata = {
  title: 'AI NEXTGEN',
  description: 'AI for Next Generations - Empowering Students with Intelligent Skills',
};

export default function Home() {
  const categories = [
    'AI Basics','Web Development','Mobile Apps','Robotics','Data Science','Cybersecurity','Blockchain'
  ];
  return (
    <div className="min-h-screen font-sans">
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img src="/logo.png" alt="AI NEXTGEN" className="w-40 mb-4" />
            <h1 className="text-4xl font-extrabold">AI NEXTGEN</h1>
            <p className="mt-3 text-slate-200">Empowering Students with Intelligent Skills</p>
            <div className="mt-6 flex gap-3">
              <a href="#categories" className="px-5 py-3 rounded-full bg-cyan-400 text-black font-semibold">Start Learning</a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-black/40 rounded-2xl p-4">
              <video src="/promo.mp4" controls className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </header>
      <main className="bg-white -mt-8 pt-12">
        <div className="max-w-6xl mx-auto px-6">
          <section id="categories" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore our Tech Skills</h2>
            <div className="grid gap-6">
              <div className="grid md:grid-cols-4 gap-6">
                {categories.slice(0,4).map((c, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-lg bg-cyan-50 flex items-center justify-center mb-4">Icon</div>
                    <h4 className="font-semibold text-lg">{c}</h4>
                    <p className="text-sm text-slate-500 mt-2">{c} practical projects and lessons.</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {categories.slice(4).map((c, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-lg bg-cyan-50 flex items-center justify-center mb-4">Icon</div>
                    <h4 className="font-semibold text-lg">{c}</h4>
                    <p className="text-sm text-slate-500 mt-2">{c} practical projects and lessons.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h3 className="text-2xl font-semibold">Sample Courses</h3>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((n)=> (
                <div key={n} className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="h-40 bg-slate-100 rounded-md mb-3 flex items-center justify-center text-slate-400">Video thumbnail</div>
                  <h4 className="font-semibold">Course {n}</h4>
                  <div className="text-sm text-slate-500 mt-1">{6+n} lessons • Beginner</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-slate-50 border-t mt-14">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>
            <img src="/logo.png" alt="AI NEXTGEN" className="w-36 mb-2" />
            <div className="text-sm text-slate-600">AI NEXTGEN — AI for Next Generations</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
