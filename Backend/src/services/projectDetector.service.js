const ignoreWords = [
  "education",
  "skills",
  "experience",
  "masters",
  "bachelor",
  "featured projects",
  "about me"
];

const projectKeywords = [
  "system",
  "app",
  "application",
  "dashboard",
  "website",
  "platform"
];

const detectProjects = (text) => {

  const lines = text.split("\n");

  const projects = [];

  lines.forEach(line => {

    const lower = line.toLowerCase().trim();

    if(lower.length < 3) return;

    if(ignoreWords.some(word => lower.includes(word))) return;

    if(projectKeywords.some(keyword => lower.includes(keyword))){

      if(line.length < 80){
        projects.push(line.trim());
      }

    }

  });

  return [...new Set(projects)].slice(0,5);

};

module.exports = detectProjects;