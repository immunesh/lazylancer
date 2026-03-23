const detectDomain = (skills) => {

  if (skills.frontend.length && skills.backend.length) {
    return "Full Stack Developer";
  }

  if (skills.frontend.length) {
    return "Frontend Developer";
  }

  if (skills.backend.length) {
    return "Backend Developer";
  }

  return "Software Developer";

};

module.exports = detectDomain;