import React from "react";
import { motion } from "framer-motion";
import { Search, UserCheck, Briefcase, CreditCard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Post Your Project",
    description:
      "Describe what you need, set your budget, and pick a timeline. Our AI helps you craft the perfect brief.",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.4)",
    forClient: true,
    forFreelancer: false,
    freelancerTitle: "Create Your Profile",
    freelancerDesc:
      "Showcase your portfolio, skills, and experience. Get verified to boost your credibility.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Review Proposals",
    description:
      "Receive tailored proposals from top freelancers within hours. Compare profiles, portfolios, and rates.",
    color: "#f97316",
    glow: "rgba(249,115,22,0.4)",
    forClient: true,
    forFreelancer: false,
    freelancerTitle: "Browse & Bid",
    freelancerDesc:
      "Discover projects matching your skills. Submit compelling proposals and set your rates.",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Collaborate Seamlessly",
    description:
      "Work together with built-in messaging, file sharing, milestones, and real-time video calls.",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.4)",
    forClient: true,
    forFreelancer: true,
    freelancerTitle: "Deliver & Impress",
    freelancerDesc:
      "Use our collaboration tools to manage projects efficiently and deliver exceptional work.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Pay Securely",
    description:
      "Release milestone payments when satisfied. 100% money-back guarantee with escrow protection.",
    color: "#10b981",
    glow: "rgba(16,185,129,0.4)",
    forClient: true,
    forFreelancer: false,
    freelancerTitle: "Get Paid Fast",
    freelancerDesc:
      "Receive payments instantly on milestone completion. 50+ currencies, zero hidden fees.",
  },
];

const ConnectorLine = ({ active }) => (
  <div className="hidden lg:flex items-center justify-center w-16 relative">
    <div className="w-full h-px bg-[var(--text-secondary)]/30 relative">
      <motion.div
        className="absolute inset-0 h-full origin-left"
        style={{ background: "linear-gradient(90deg, #7c3aed, #f97316)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </div>
    <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--text-secondary)]/50 rounded-full" />
  </div>
);

export default function HowItWorks() {
  const [activeTab, setActiveTab] = React.useState("client");

  return (
    <section
      id="how-it-works"
      className="relative py-32 overflow-hidden bg-[var(--bg-main)]"
    >
      <div className="absolute inset-0 mesh-grid opacity-15" />

      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-black font-display mb-6 text-[var(--text-main)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            How it <span className="text-gradient">Works</span>
          </motion.h2>
          <motion.p
            className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Whether you're hiring or looking for work, we've made it effortless.
          </motion.p>

          {/* Tab toggle */}
          <motion.div
            className="inline-flex glass rounded-full p-1 gap-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {["client", "freelancer"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? "text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-main)]"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-700 rounded-full"
                    layoutId="tabBg"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "client" ? "I'm Hiring" : "I'm a Freelancer"}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const title =
              activeTab === "client" ? step.title : step.freelancerTitle;
            const description =
              activeTab === "client" ? step.description : step.freelancerDesc;

            return (
              <React.Fragment key={step.number}>
                <motion.div
                  className="flex-1 glass-card-light rounded-3xl p-8 relative overflow-hidden group cursor-default"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  {/* Number */}
                  <div
                    className="text-7xl font-black font-display absolute top-4 right-4 select-none leading-none opacity-[0.12] dark:opacity-[0.05]"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}22, ${step.color}55)`,
                      border: `1px solid ${step.color}44`,
                      boxShadow: `0 8px 24px ${step.glow}`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <div
                    className="  text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: step.color }}
                  >
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 font-display">
                    {title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {description}
                  </p>

                  {/* Hover border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${step.color}44` }}
                  />
                </motion.div>

                {i < steps.length - 1 && <ConnectorLine />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="btn-primary text-base py-4 px-10">
            <span className="relative z-10">
              {activeTab === "client"
                ? "Post a Project Free →"
                : "Start Earning Today →"}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
