export async function analyzeEntry(content: string) {
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // you can try other models too
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant that analyzes journal entries and strictly responds with only a valid JSON object. The JSON should include two fields: `sentiment` (positive, neutral, or negative) and `emotions` (an array of emotion strings like 'joy', 'anger', 'fear').",
            },
            {
              role: "user",
              content: `Analyze the following journal entry and provide a JSON response with two fields: "sentiment" (positive, neutral, negative) and "emotions" (list of emotions like 'joy', 'fear', 'anxiety', 'uncertainty', etc.). Entry: "${content}"`,
              
            },
          ],
        }),
      });
  
      const result = await res.json();
      const message = result?.choices?.[0]?.message?.content;
      
      console.log("AI raw response:", message); // Log the response for debugging
  
      if (!message) return null;
  
      // Try to parse the result and check if it's correct
      const parsed = JSON.parse(message);
  
      return {
        sentiment: parsed.sentiment,
        emotions: parsed.emotions,
      };
    } catch (error) {
      console.error("analyzeEntry() error:", error);
      return null;
    }
  }
  