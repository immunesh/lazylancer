import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadPortfolio,
  getMyPortfolio,
} from "../redux/slices/portfolioSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.portfolio);

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
    <div className="min-h-screen px-6 py-28
      bg-[var(--bg-main)]
      text-[var(--text-main)]
    ">

      <h1 className="text-3xl font-bold mb-10">
        
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="p-6 rounded-2xl bg-[var(--bg-card)]">
          <p>Skills</p>
          <h2 className="text-3xl font-bold">
            {data?.skills?.length || 0}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[var(--bg-card)]">
          <p>Projects</p>
          <h2 className="text-3xl font-bold">
            {data?.projects?.length || 0}
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[var(--bg-card)]">
          <p>GitHub Links</p>
          <h2 className="text-3xl font-bold">
            {data?.githubLinks?.length || 0}
          </h2>
        </div>

      </div>

      {/* Upload */}
      <div className="p-6 rounded-2xl mb-10 bg-[var(--bg-card)]">

        <h2 className="text-xl mb-4">Upload Portfolio</h2>

        <input
          type="text"
          placeholder="Portfolio URL"
          value={portfolioUrl}
          onChange={(e) => setPortfolioUrl(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg
          bg-transparent border border-gray-300 dark:border-white/10"
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-3"
        />

        <button
          onClick={handleUpload}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
        >
          Analyze
        </button>

      </div>

      {/* Skills */}
      {data?.skills?.length > 0 && (
        <div className="p-6 rounded-2xl mb-10 bg-[var(--bg-card)]">

          <h2 className="text-xl mb-4">Skills</h2>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-indigo-600 text-white"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      )}

      {/* Projects */}
      {data?.projects?.length > 0 && (
        <div className="p-6 rounded-2xl mb-10 bg-[var(--bg-card)]">

          <h2 className="text-xl mb-4">Projects</h2>

          {data.projects.map((p, i) => (
            <div key={i} className="mb-2">
              • {p}
            </div>
          ))}

        </div>
      )}

      {/* Suggestions */}
      <div className="p-6 rounded-2xl bg-[var(--bg-card)]">

        <h2 className="text-xl mb-4">AI Suggestions 🤖</h2>

        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-gray-200 dark:bg-white/10">
            Build a SaaS Dashboard
          </div>
          <div className="p-4 rounded-lg bg-gray-200 dark:bg-white/10">
            Create Chat App
          </div>
          <div className="p-4 rounded-lg bg-gray-200 dark:bg-white/10">
            Add Auth System
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;