import { GoogleGenAI, Type } from "@google/genai";
import { GeminiDimensionResponse } from "../types";

export const getDimensionsFromAi = async (query: string): Promise<GeminiDimensionResponse | null> => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing.");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User request: "${query}". 
      Task: Extract or infer the pixel dimensions (width and height) for the requested image format. 
      Examples: 
      - "Instagram Story" -> 1080x1920
      - "4k video" -> 3840x2160
      - "A4 paper at 300dpi" -> 2480x3508
      - "iPhone 14 Pro wallpaper" -> 1179x2556
      If the request is vague, provide the most common standard.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            width: { type: Type.INTEGER, description: "The width in pixels" },
            height: { type: Type.INTEGER, description: "The height in pixels" },
            reason: { type: Type.STRING, description: "A short explanation of why these dimensions were chosen" }
          },
          required: ["width", "height", "reason"],
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeminiDimensionResponse;
    }
    return null;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};