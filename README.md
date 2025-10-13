# ☁️ Weather Application

A clean and responsive weather application built using **NextJS** that allows users to search for real-time weather data by city name. It fetches accurate weather information using the **OpenWeatherMap API** and displays it in a user-friendly interface with animated icons.

---
## 🚀 Live Demo

Check out the deployed app here: 

## 🚀 Features

- 🔍 Search for weather in any city

- 🧭 Shows current location weather by default

- 🌡️ Displays temperature, humidity, wind speed, and visibility

- ⛅ Animated weather icons

- 🖼️ Responsive background and UI

- ⚡ Debounced search for performance




## 🛠️ Technologies Used

- **NextJS** – Frontend framework

- **Axios** – For API requests

- **React Animated Weather** – For weather icons

- **OpenWeatherMap API** – For real-time weather data

---

## 📦 Installation

1. **Clone the repository**

```bash

git clone https://github.com/sahilsingh7735/weather-app-hacktoberfest2025.git
cd weather-app-hacktoberfest2025

```

2. **Install dependencies**

```bash

npm install

```
3. **Set up Environment variables**

```env

cp .env.example .env

```
OR 
- Create a file called .env in the root directory and add your OpenWeatherMap API key:
```env

REACT_APP_WEATHER_API_KEY=your_api_key_here

```
Or directly update the `apiKeys.js` file inside `/app`.

4. **Start the development server**

```bash

npm run dev

```

---

## 📁 Folder Structure

```

<!-- cloud-high/
src/
│   ├── app/                # Next.js App Router directory
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── (routes)/           # Optional grouped routes
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   └── auth/
│   │   │       ├── login/
│   │   │       │   └── page.tsx
│   │   │       └── register/
│   │   │           └── page.tsx
│   │   └── api/       # Route handlers (Next.js API routes)
│   │       └── user/
│   │           └── route.ts
│   │
│   ├── components/             # Reusable UI components
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── modal.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Sidebar.tsx
│   │   └── index.ts            # Barrel export
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useTheme.ts
│   │
│   ├── lib/                    # Helper functions, utils, and configs
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── prisma.ts           # If using Prisma or DB connector
│   │
│   ├── store/                  # Zustand/Redux or Context files
│   │   └── userStore.ts
│   │
│   ├── styles/                 # Tailwind globals / CSS modules
│   │   ├── globals.css
│   │   └── theme.css
│   │
│   └── types/                  # TypeScript types/interfaces
│       └── index.d.ts
│
├── .eslintrc.json              # ESLint config
├── next.config.mjs
├── package.json
├── README.md
├── tsconfig.json
└── LICENSE

```

---
## 🧑‍💻 Developer

**Sahil Singh**

- 🔗 LinkedIn: [Sahil Singh](https://www.linkedin.com/in/sahil-singh-a6462a131?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- 💼 GitHub: [@sahilsingh7735](https://github.com/sahilsingh7735)
- 📧 Email: sahilsinghofficial77@gmail.com


## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.