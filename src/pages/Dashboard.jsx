import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadPortfolio,
  getMyPortfolio,
} from "../redux/slices/portfolioSlice";
import { motion } from "framer-motion";
import { UploadCloud, Code2, GitBranch, FolderDot, Shapes, Zap, Sparkles, ArrowRight } from "lucide-react";

// --- High-Performance Animation Wrappers ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const StatCard = ({ title, value, icon: Icon, delay }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="h-full rounded-[1.5rem] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] p-6 hover:border-gray-300 dark:hover:border-[#404040] transition-colors group flex items-start gap-5 shadow-sm dark:shadow-none">
      <div className="p-3 bg-gray-50 dark:bg-[#171717] rounded-xl border border-gray-100 dark:border-[#262626] group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:border-indigo-200 dark:group-hover:border-indigo-500/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all text-gray-500 dark:text-gray-400">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase mb-1">{title}</p>
        <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">{value}</h3>
      </div>
    </div>
  </FadeIn>
);

const IntelligenceCard = ({ title, desc, icon: Icon, delay }) => (
  <FadeIn delay={delay}>
    <div className="p-5 rounded-[1.5rem] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] hover:border-gray-300 dark:hover:border-[#404040] transition-colors cursor-pointer group flex flex-col gap-4 shadow-sm dark:shadow-none">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        <h4 className="text-gray-900 dark:text-gray-200 font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed flex-1">{desc}</p>
      <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400/80 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors mt-2 uppercase tracking-wide">
        Initialize Module <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </FadeIn>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.portfolio);

  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    dispatch(getMyPortfolio());
  }, [dispatch]);

  const handleUpload = () => {
    const formData = new FormData();
    if (file) formData.append("portfolio", file);
    else if (portfolioUrl) formData.append("portfolioUrl", portfolioUrl);
    
    dispatch(uploadPortfolio(formData));
    setPortfolioUrl("");
    setFile(null);
  };

  return (
    <div className="h-full relative text-gray-900 dark:text-gray-100 font-sans selection:bg-indigo-500/30 transition-colors duration-300">
      
      {/* Performance-friendly static subtle grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),dark:linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col gap-8 pt-2 md:pt-4">
        
        {/* --- HEADER --- */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium tracking-wide uppercase">System Active</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            Engineering Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Manage your synchronized portfolio assets and view AI-driven trajectory metrics.
          </p>
        </FadeIn>

        {/* --- STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Skills" value={data?.skills?.length || 0} icon={Code2} delay={0.1} />
          <StatCard title="Logged Projects" value={data?.projects?.length || 0} icon={FolderDot} delay={0.2} />
          <StatCard title="Repositories" value={data?.githubLinks?.length || 0} icon={GitBranch} delay={0.3} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- MAIN COLUMN --- */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Upload Section */}
            <FadeIn delay={0.2}>
              <div className="rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden shadow-sm dark:shadow-none">
                {/* Subtle top glare for dark mode */}
                <div className="hidden dark:block absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="flex items-start gap-5 mb-2">
                  <div className="p-3 bg-gray-50 dark:bg-[#171717] rounded-xl border border-gray-100 dark:border-[#262626]">
                    <UploadCloud className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Portfolio Analysis Sync</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Upload your CV document or link your live portfolio. The system will systematically extract your core competencies.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-2">
                  <input
                    type="text"
                    placeholder="https://your-portfolio.com"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    className="flex-1 px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-[#262626] focus:border-indigo-500 focus:dark:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all text-sm font-mono shadow-inner"
                  />
                  <label className="flex-1 md:max-w-xs flex justify-center items-center px-5 py-3.5 rounded-xl border border-dashed border-gray-300 dark:border-[#404040] hover:border-indigo-500 hover:dark:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-all cursor-pointer text-gray-600 dark:text-gray-400 text-sm font-medium">
                    <input type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
                    <span className="truncate">{file ? file.name : "Select Document"}</span>
                  </label>
                </div>
                
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={handleUpload}
                    disabled={!file && !portfolioUrl}
                    className="w-full md:w-auto px-8 py-3.5 bg-indigo-600 dark:bg-gray-100 text-white dark:text-black hover:bg-indigo-700 dark:hover:bg-white disabled:opacity-50 disabled:pointer-events-none font-bold rounded-xl transition-all text-sm tracking-wide shadow-sm"
                  >
                    Commence Sync
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* Matrix Data Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              {/* Skills */}
              <FadeIn delay={0.3} className="h-full">
                <div className="h-full rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] p-8 flex flex-col shadow-sm dark:shadow-none">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                    <Code2 className="text-indigo-600 dark:text-indigo-400 w-5 h-5" /> Analyzed Skills
                  </h3>
                  <div className="flex flex-wrap gap-2.5 flex-1 content-start max-h-[300px] overflow-y-auto pr-2">
                    {data?.skills?.length > 0 ? (
                      data.skills.map((skill, i) => (
                        <span key={i} className="px-3.5 py-1.5 rounded-lg bg-gray-50 dark:bg-[#171717] border border-gray-200 dark:border-[#262626] text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-300 dark:hover:border-[#404040] transition-colors cursor-default">
                          {skill}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-600 mt-4">Awaiting processing...</p>
                    )}
                  </div>
                </div>
              </FadeIn>

              {/* Projects */}
              <FadeIn delay={0.4} className="h-full">
                <div className="h-full rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#262626] p-8 flex flex-col shadow-sm dark:shadow-none">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                    <FolderDot className="text-teal-600 dark:text-teal-400 w-5 h-5" /> Project Vector Log
                  </h3>
                  <div className="flex flex-col gap-3 flex-1 max-h-[300px] overflow-y-auto pr-2">
                    {data?.projects?.length > 0 ? (
                      data.projects.map((p, i) => (
                        <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-[#262626] hover:border-gray-200 dark:hover:border-[#404040] transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">{p}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-600 mt-4">Awaiting processing...</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* --- SIDEBAR --- */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <FadeIn delay={0.5}>
              <div className="flex items-center gap-3 mb-2 px-2">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">AI Intelligence</h3>
              </div>
            </FadeIn>
            <div className="flex flex-col gap-4">
              <IntelligenceCard 
                title="SaaS Dashboard Module" 
                desc="Structure a scalable administrative interface to streamline your data pipelines." 
                icon={Shapes} 
                delay={0.6} 
              />
              <IntelligenceCard 
                title="WebSocket Core" 
                desc="Establish real-time bi-directional communication channels for live data execution." 
                icon={Zap} 
                delay={0.7} 
              />
              <IntelligenceCard 
                title="Zero-Trust Architecture" 
                desc="Enforce rigorous cryptographic verification for all component communications." 
                icon={GitBranch} 
                delay={0.8} 
              />
            </div>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Ultra-minimal custom scrollbar that doesn't cause repaint lag */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 6px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        .dark ::-webkit-scrollbar-thumb { background: #262626; }
        .dark ::-webkit-scrollbar-thumb:hover { background: #404040; }
      `}} />
    </div>
  );
};

export default Dashboard;