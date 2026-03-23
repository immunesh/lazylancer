import React from "react";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#050a18] text-white px-6 py-28">

            {/* Heading */}
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h2 className="text-gray-400 text-sm">Applications</h2>
                    <p className="text-3xl font-bold mt-2">12</p>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h2 className="text-gray-400 text-sm">Interviews</h2>
                    <p className="text-3xl font-bold mt-2">3</p>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h2 className="text-gray-400 text-sm">Profile Score</h2>
                    <p className="text-3xl font-bold mt-2 text-green-400">78%</p>
                </div>

            </div>

            {/* Resume + Profile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

                {/* Resume Card */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h2 className="text-xl font-semibold mb-4">Resume Score</h2>
                    <p className="text-gray-400 mb-4">
                        Improve your resume to get better job matches.
                    </p>

                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-indigo-500 h-3 rounded-full w-[78%]"></div>
                    </div>

                    <button className="mt-6 bg-indigo-600 px-4 py-2 rounded-lg">
                        Upload Resume
                    </button>
                </div>

                {/* Profile Card */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h2 className="text-xl font-semibold mb-4">Profile Info</h2>

                    <p className="text-gray-300">Name: Anand Singh</p>
                    <p className="text-gray-300 mt-2">Skills: React, Node</p>
                    <p className="text-gray-300 mt-2">Experience: Fresher</p>

                    <button className="mt-6 bg-blue-600 px-4 py-2 rounded-lg">
                        Edit Profile
                    </button>
                </div>

            </div>

            {/* Job Suggestions */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">

                <h2 className="text-xl font-semibold mb-6">Job Suggestions</h2>

                <div className="space-y-4">

                    {/* Job Card */}
                    <div className="p-4 bg-white/5 rounded-xl flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">Frontend Developer</h3>
                            <p className="text-gray-400 text-sm">Remote • React</p>
                        </div>
                        <button className="bg-indigo-600 px-4 py-2 rounded-lg">
                            Apply
                        </button>
                    </div>

                    <div className="p-4 bg-white/5 rounded-xl flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">Backend Developer</h3>
                            <p className="text-gray-400 text-sm">Node.js • API</p>
                        </div>
                        <button className="bg-indigo-600 px-4 py-2 rounded-lg">
                            Apply
                        </button>
                    </div>

                    <div className="p-4 bg-white/5 rounded-xl flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">Full Stack Developer</h3>
                            <p className="text-gray-400 text-sm">MERN Stack</p>
                        </div>
                        <button className="bg-indigo-600 px-4 py-2 rounded-lg">
                            Apply
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;