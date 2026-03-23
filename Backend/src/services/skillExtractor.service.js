const skillsList = [
"javascript",
"react",
"node",
"mongodb",
"express",
"python",
"java",
"html",
"css"
];

const extractSkills = (text)=>{

 const lower = text.toLowerCase();

 return skillsList.filter(skill=>lower.includes(skill));

}

module.exports = extractSkills;