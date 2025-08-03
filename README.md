# 🤖 InsighTron – AI-Powered Mock Interview System

**InsighTron** is an AI-powered web application that helps users practice mock interviews in real-time using speech-to-text and LLMs. Gain instant feedback, track your performance, and get interview-ready! 🚀  

---

## 🧠 Features

- 🎙️ Voice-based Mock Interviews
- 💬 AI Feedback (Real-time + Post-interview Summary)
- 🧾 Skill-wise Scoring (e.g., Communication, Technical Fit, Cultural Fit)
- 📊 Interview History & Review System
- 🛡️ Secure Authentication with Firebase

---

## 🛠️ Built With

| Tech | Description |
|------|-------------|
| [![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) | React Framework for Full Stack Apps |
| [![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) | Utility-first CSS Framework |
| [![Vapi](https://img.shields.io/badge/Vapi.ai-purple?style=for-the-badge)](https://www.vapi.ai/) | Voice API for real-time audio + LLM |
| [![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/) | Backend-as-a-Service (Auth, Firestore) |

---

## 📸 Screenshots

### 🔹 Dashboard – Start Interview
![Dashboard](./assets/Screenshot%202025-08-03%20235400.png)

### 🔹 Interview Feedback Summary
![Feedback](./assets/Screenshot%202025-08-03%20235519.png)

### 🔹 Sign In Page
![Sign In](./assets/Screenshot%202025-08-03%20235536.png)

### 🔹 Sign Up Page
![Sign Up](./assets/Screenshot%202025-08-03%20235541.png)

---

## 📦 Folder Structure

```
/insightron
├── .next/                     # Next.js build folder
├── .vscode/                   # VSCode config
├── app/                       # App router pages and layouts
│   ├── (auth)/                # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/interview/      # Interview routes
│   ├── api/                   # API routes
├── assets/                    # Screenshots and images for README
├── Components/                # Reusable components
│   ├── ui/                    # UI subcomponents (form, button etc.)
├── constants/                 # Constant variables
├── firebase/                  # Firebase admin and client config
├── lib/                       # Utility functions & actions
│   └── actions/               # Business logic & action handlers
├── node_modules/              # Project dependencies
├── public/                    # Static files (images, svg icons)
│   └── covers/                # Avatar & background images
├── types/                     # TypeScript type declarations
├── .env.local                 # Environment variables
├── .gitignore
├── .prettierrc
├── components.json            # (Optional) Component config
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/insightron.git
cd insightron
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add Environment Variables

Create a `.env.local` file and add your keys:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_VAPI_KEY=your_vapi_key
```

### 4️⃣ Run the App

```bash
npm run dev
```

---

## 📬 Feedback & Contributions

If you have suggestions, feature requests, or bugs to report, feel free to create an issue or open a pull request.  
You can also connect on [LinkedIn](https://linkedin.com/in/your-profile).

---

## 📄 License

MIT License © 2025 **Sachin Pundir**

---

> 💡 *Built to empower candidates with confidence and clarity in interviews.*  
> 🧠 *Train with AI. Interview like a pro.*