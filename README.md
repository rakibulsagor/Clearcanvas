# ClearCanvas AI

🌐 **Live Website:** [https://clearcanvasai.vercel.app/](https://clearcanvasai.vercel.app/)

**ClearCanvas AI** is a web-based utility tool that allows users to generate custom-sized transparent placeholder images instantly. It features an AI-powered smart resizing tool that helps users find the perfect dimensions for social media, devices, and print formats just by typing a description.

## ✨ Features

- **Custom Dimensions:** Manually input any width and height to generate a transparent PNG.
- **🤖 AI Smart Resize:** Powered by Google Gemini 2.5 Flash, simply type "Instagram Story" or "iPhone 15 Pro Wallpaper" to automatically set the correct dimensions.
- **Aspect Ratio Locking:** Lock the aspect ratio while resizing to maintain proportions.
- **Quick Presets:** One-click buttons for common social media and video standards (1080p, 4K, Twitter Post, etc.).
- **Instant Preview:** Visualizes the canvas size relative to the viewport.
- **Copy & Download:** Download the PNG file or copy it directly to your clipboard for use in design tools like Figma or Photoshop.

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **AI Integration:** Google Gemini API (`@google/genai`)
- **Icons:** Lucide React

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- A Google Gemini API Key (Get one at [aistudio.google.com](https://aistudio.google.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/clear-canvas-ai.git
   cd clear-canvas-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your API key:
   ```env
   API_KEY=your_google_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## ⚙️ Personalization

### 1. API Key Setup
To make the AI features work:
1. Get a key from [Google AI Studio](https://aistudio.google.com/).
2. If deploying to **Vercel**, go to Settings > Environment Variables and add `API_KEY`.
3. If running **Locally**, add it to a `.env` file as shown above.

### 2. Adding Your Contact Info
To display your own email and LinkedIn profile in the footer:
1. Open the file `App.tsx`.
2. Scroll down to the **Footer** section (around line 130).
3. Find the `href` attribute for the email link and change `mailto:contact@example.com` to your email.
4. Find the `href` attribute for the LinkedIn link and change it to your profile URL.
5. Update the text "Developer Profile" to your name if desired.

## 📦 Deployment

### Deploy to Vercel

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. In the Vercel **Project Settings**, add an Environment Variable:
   - **Key:** `API_KEY`
   - **Value:** Your actual Gemini API key.
4. Deploy!

### Deploy to GitHub Pages

This project includes a GitHub Actions workflow for automatic deployment.
1. Go to your repo **Settings > Secrets and variables > Actions**.
2. Add a repository secret named `API_KEY` with your Gemini API key.
3. Push to the `main` branch.

---

&copy; 2024 ClearCanvas AI. All rights reserved.