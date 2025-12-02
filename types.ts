export interface Dimensions {
  width: number;
  height: number;
}

export interface DimensionPreset {
  name: string;
  width: number;
  height: number;
  category: 'Social' | 'Video' | 'Print' | 'Device';
}

export interface AiSuggestion {
  width: number;
  height: number;
  reason: string;
}

// Gemini Response Schema
export interface GeminiDimensionResponse {
  width: number;
  height: number;
  reason: string;
}
