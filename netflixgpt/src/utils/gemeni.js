import { GoogleGenAI } from "@google/genai";
import { OPENAPI_KEY } from "./constant";

// Initialize the AI client using the environment variable
// Use a fallback for the API key to avoid errors during development
const GEMINI_API_KEY = OPENAPI_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// This function takes a movie search term and sends it to the Gemini model
export async function searchMovies(query) {
  // Assuming 'ai' is an initialized Gemini client instance
  // and GEMINI_API_KEY is defined in scope or process.env
  if (!query || !GEMINI_API_KEY) {
    console.error("Search term or API Key is missing.");
    return null;
  }

  // 1. Define the Response Schema (OpenAPI 3.0 compatible subset)
  // This explicitly tells the model the exact JSON structure to return.
  const movieArraySchema = {
    type: "ARRAY", // The top-level structure is an array
    description: "A list of movie titles.",
    maxItems: 5, // Optional: Can add constraints to the list size
    items: {
      type: "STRING", // Each item in the array must be a string (the movie title)
      description: "The name of a movie.",
    },
  };

  // 2. The prompt can be simpler, as the schema enforces the output format.
  const prompt = `
    Act as a Movie Recommendation system and suggest exactly 5 movies name for the query: "${query}".
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      // 3. Add generationConfig to enforce JSON structure
      config: {
        responseMimeType: "application/json",
        responseSchema: movieArraySchema,
      },
    });

    // The response.text is now GUARANTEED to be a valid JSON array string (e.g., '["Movie 1", "Movie 2", ...]')
    // No need for the brittle .replace(/```json|```/g, "") cleanup!
    const movies = JSON.parse(response.text.trim());

    // Ensure the parsed result is an array before returning
    return Array.isArray(movies) ? movies : [];
  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
}
