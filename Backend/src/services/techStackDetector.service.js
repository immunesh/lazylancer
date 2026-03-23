const stacks = [
  "mern",
  "mean",
  "lamp",
  "django",
  "spring boot"
];

const detectTechStack = (text)=>{

 const lower = text.toLowerCase();

 return stacks.filter(stack => lower.includes(stack));

}

module.exports = detectTechStack;