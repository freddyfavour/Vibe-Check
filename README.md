# Vibe Check — Sentiment & Emotion Analyzer with Gemini + Genkit

**Vibe Check** is a modern web application that uses **Gemini AI** and **Genkit** to analyze and summarize the emotional tone of user-submitted text. Built with **Next.js**, **Tailwind CSS**, and **TypeScript**, it offers real-time sentiment scores, qualitative emotion summaries, and a sleek, user-first interface.

---

## ✨ Features

### 🧠 AI-Driven Sentiment Analysis
- Accepts raw text input
- Classifies the sentiment as **Positive**, **Neutral**, or **Negative**
- Displays both a **score** and a **qualitative label** 

### 📋 Text Input
- Simple textarea for user input
- Supports **copy/paste** functionality for quick testing or analysis

### 🎭 Emotion Summary
- Generates a short, AI-powered summary of the key **emotions** or **tones** using Gemini + Genkit

### 🎨 UI/UX Enhancements
- Clean sans-serif typography optimized for readability
- Minimalist icons representing emotion and sentiment
- Subtle animations for transitions and analysis feedback
- Responsive layout optimized for mobile and desktop

---

## 🛠️ Tech Stack

| Layer       | Tech Used                  |
|-------------|----------------------------|
| **UI**      | Next.js, Tailwind CSS, TypeScript |
| **AI**      | Gemini (via Genkit)        |
| **Framework** | Genkit (Google AI framework) |
| **Design**  | Minimalist, accessible, animated |

---

## 📸 Preview
![Preview](https://github.com/freddyfavour/Vibe-Check/blob/master/preview.png?raw=true)

---

## 🧪 How It Works

1. User types or pastes text into the input field.
2. On submit, the text is sent to Gemini via Genkit.
3. The system:
   - Classifies sentiment (Positive, Neutral, Negative)
   - Assigns a qualitative tag (e.g. _"slightly negative"_)
   - Generates a brief summary of detected emotions or tone
4. The results are displayed using color, text, and icon indicators.

---

## 🧰 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/freddyfavour/Vibe-Check.git
cd Vibe-Check
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file and add your Gemini API key:

```env
GENKIT_API_KEY=your-gemini-api-key
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

---

## 🧠 About the AI

* **Gemini**: A powerful multimodal AI model developed by Google for high-quality understanding and generation of text.
* **Genkit**: An open-source framework that simplifies calling AI models like Gemini and structuring generative logic in apps.

> Learn more at [https://ai.google.dev/gemini](https://ai.google.dev/gemini)

---

## 📬 Contact

Created with ❤️ by **Alfred Favour**
📅 [Schedule a chat](https://calendly.com/alfredfavour76/project-discussion)

---

## 📝 License

MIT License — free to use, modify, and distribute.

---

## 🙌 Acknowledgements

* Google AI Studio & Genkit
* Tailwind Labs
* Vercel & the Next.js team
