const skillDatabase = {
  javascript: ["javascript", "js"],
  react: ["react", "reactjs"],
  node: ["node", "nodejs", "node.js"],
  mongodb: ["mongodb", "mongo"],
  express: ["express", "expressjs"],
  python: ["python"],
  java: ["java"],
  html: ["html"],
  css: ["css"],
  tailwind: ["tailwind"],
};

const analyzeSkills = (text) => {

  const lower = text.toLowerCase();

  const detected = [];

  Object.keys(skillDatabase).forEach(skill => {

    const aliases = skillDatabase[skill];

    aliases.forEach(alias => {

      const regex = new RegExp(`\\b${alias}\\b`, "i");

      if (regex.test(lower) && !detected.includes(skill)) {
        detected.push(skill);
      }

    });

  });

  return detected;

};

module.exports = analyzeSkills;