require("dotenv").config();

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const analyzePortfolio = async (text) => {

const prompt = `
You are an AI developer portfolio analyzer.

Analyze the following portfolio text and extract structured information.

Extract:

1. Technical skills
2. Projects built
3. Tech stack used
4. Domain specialization (Frontend / Backend / Fullstack / AI / Data etc)
5. Experience level (Beginner / Intermediate / Advanced)

Return ONLY valid JSON in this format:

{
 "skills": [],
 "projects": [],
 "techStack": [],
 "domain": "",
 "experienceLevel": ""
}

Portfolio text:
${text.slice(0,4000)}
`;

const response = await openai.chat.completions.create({

model: "gpt-4o-mini",

messages: [
{
role: "user",
content: prompt
}
],

temperature: 0.2

});

return JSON.parse(response.choices[0].message.content);

};

module.exports = analyzePortfolio;