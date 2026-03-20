
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: "Method Not Allowed" }) 
    };
  }

  const apiKey = process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Gemini API Key is not configured in the server environment." }) 
    };
  }

  try {
    const { prompt, context } = JSON.parse(event.body);
    
    // We move the system context here for better security/privacy
    const systemPrompt = `You are a helpful AI assistant for Ajay Gangwar's portfolio. 
    Use the following data to answer user queries: ${context || "Ajay is an Aspiring Data Scientist | Full Stack Developer | Problem Solver."}
    Keep your answers concise, professional, and focused on Ajay's skills, projects, and experience. 
    If asked about something unrelated, politely bring the conversation back to Ajay's work.
    User Query: `;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: systemPrompt + prompt }]
        }]
      })
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error("Proxy Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error during AI processing." })
    };
  }
};
