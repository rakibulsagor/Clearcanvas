


# 🎨 ClearCanvas AI

[](https://opensource.org/licenses/MIT)
[](https://react.com/)
[](http://makeapullrequest.com)
[](https://www.google.com/search?q=https://twitter.com/rakibulsagor)

**Stop letting AI generators force square aspect ratios on you.** ClearCanvas AI is a simple tool that generates perfectly sized transparent reference images to force other AI models (like Midjourney, DALL-E, or Stable Diffusion) to output the exact dimensions you need.

🔗 **Live Demo:** [https://clearcanvasai.vercel.app/](https://clearcanvasai.vercel.app/)

-----

## 😫 The Problem

Most top-tier AI image generators default to square images or offer a limited set of fixed aspect ratios. If you are trying to generate a specific format—like an **Instagram Story (9:16)** or an **iPhone 15 Wallpaper**—you often have to crop the result (losing quality) or struggle with complex prompt engineering.

## 💡 The Solution

**ClearCanvas AI** solves this using a simple "workflow hack."
Instead of guessing pixel counts, you simply type what you need (e.g., *"Instagram Story"*), and the tool uses the **Gemini API** to determine the correct resolution and generate a transparent PNG canvas of that exact size.

### The Workflow Hack 🛠️

1.  **Generate:** Go to [ClearCanvas AI](https://clearcanvasai.vercel.app/) and type your target format (e.g., "YouTube Thumbnail").
2.  **Download:** Save the transparent PNG it generates.
3.  **Upload & Force:** Upload this PNG to your favorite AI generator as an "Image Reference" or "Image to Image" source.
4.  **Prompt:** Tell the AI to *"generate an image based on this photo."*

The AI will now be forced to adhere to the dimensions of your uploaded canvas\!

-----

## ✨ Features

  * **Natural Language Inputs:** No need to memorize 1080x1920. Just type "iPhone Wallpaper."
  * **Powered by Gemini API:** Intelligently understands context to provide the right dimensions.
  * **Instant Download:** Generates a lightweight, transparent PNG instantly.
  * **Dark Mode / Light Mode:** (Optional: Add this if your app has it, or remove).

-----

## 🚀 Tech Stack

  * **Frontend:** React.js
  * **AI Logic:** Google Gemini API
  * **Styling:** CSS / Tailwind (Adjust based on what you used)
  * **Deployment:** Vercel

-----

## 📦 Getting Started locally

To run this project locally, follow these steps:

1.  **Clone the repo**

    ```bash
    git clone https://github.com/rakibulsagor/Clearcanvas.git
    cd Clearcanvas
    ```

2.  **Install NPM packages**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add your Gemini API key:

    ```env
    REACT_APP_GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the project**

    ```bash
    npm start
    ```

-----

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

-----

## 👤 Author

**Rakibul Sagor**

  * GitHub: [@rakibulsagor](https://github.com/rakibulsagor)
  * Twitter/X: [@rakibulsagor](https://www.google.com/search?q=https://twitter.com/rakibulsagor)

-----

## ⭐ Support

If you found this tool useful, please leave a **Star** on this repo\! It helps others find the project.

-----

### 💡 Tips for your Repo:

  * **Add a Screenshot:** I highly recommend taking a screenshot of your app's interface and placing it right after the "Live Demo" link using `![App Screenshot](path/to/image.png)`. Visuals increase stars significantly\!
  * **Add a GIF:** If you can record a 5-second GIF showing the process (Type -\> Generate -\> Download), that works even better.
