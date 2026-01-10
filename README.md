# 📰 News Explorer — Frontend

**News Explorer** is a responsive React application that allows users to search for current news articles by keyword, explore results from the past week, and save articles to their personal account. This repository contains the **frontend** of the application. Backend integration is planned and will be added in a future update.

🎨 **Design:** https://www.figma.com/design/3ottwMEhlBt95Dbn8dw1NH/Your-Final-Project

## 🎥 Project Pitch Videos

Check out these videos, where I describe my project
and some challenges I faced while building it:

- **UI & Frontend Overview (5 min):**
- **Backend & API Overview (5 min):** Coming soon

---

## 📌 Features

### 🔍 News Search

- Search for articles by keyword using the **NewsAPI**
- Results limited to the past 7 days
- Graceful handling of:
  - Empty searches
  - No results
  - Network / API errors

### 🧭 Navigation & Routing

- Client-side routing with **React Router**
- Routes:
  - `/` — Search and explore news
  - `/saved-news` — Saved articles (protected)
- Route-aware navigation styles

### 👤 Authentication (Frontend-only)

- Sign up and sign in via modal forms
- Global auth state managed with **React Context**
- Protected routes based on login state
- Mock authentication logic (backend coming later)

### 💾 Saved Articles (UI-ready)

- Save / unsave article UI
- Visual feedback for saved state
- Backend persistence planned for Stage 3

### 📱 Responsive Design

- Fully responsive layout (desktop, tablet, mobile)
- Mobile navigation menu with overlay
- Semantic HTML and BEM-based CSS

### 🪟 Modals & Forms

- Centralized modal system
- Accessible modals:
  - ESC key support
  - Overlay click close
- Shared form logic with custom validation hook

---

## 🛠 Tech Stack

### Frontend

- React 19
- Vite 6
- React Router
- JavaScript (ES2020+)
- CSS (BEM methodology)

### Tooling

- ESLint
- Normalize.css
- Custom hooks
- React Context API

### APIs

- NewsAPI
  > Free tier allows requests only from `localhost`, so production uses a proxy URL.

---

## 📂 Project Structure (Simplified)

```
src/
|-- blocks/
|   |- app.css
|   |- header.css
|   |__ ...
|
├── components/
│   ├── App.jsx
│   ├── Header.jsx
│   ├── Navigation.jsx
│   ├── NewsCard.jsx
│   ├── Modal.jsx
│   └── …
├── hooks/
│   ├── useAuth.js
│   ├── useModal.js
│   ├── useSearch.js
│   └── useFormWithValidation.js
|   |__ ...
|
├── contexts/
│   └── CurrentUserContext.js
├── utils/
│   ├── newsApi.js
│   ├── auth.js
│   ├── helpers.js
│   └── constants.js
|   |__ ...
|
├── assets/
├── vendor/
└── index.css
```

---

## ⚙️ Environment Variables

> Client-side API keys are not fully secure. This setup is acceptable for demos and coursework. Full security will be handled by the backend.

---

---

## 🧠 Architecture Highlights

- **Context API**  
  Used for global auth state (`currentUser`, `isLoggedIn`) to avoid prop drilling.

- **Custom Hooks**

  - `useAuth` — login, registration, logout logic
  - `useModal` — centralized modal state
  - `useSearch` — encapsulated search flow and status handling
  - `useFormWithValidation` — reusable form validation

- **Separation of Concerns**
  - UI components remain declarative
  - Business logic isolated in hooks and utilities

---

## 🧪 Known Limitations

- Authentication and saved articles are frontend-only
- API key is exposed in the browser (expected for this stage)

---

## 🔮 Planned Backend Features

- Real authentication with JWT

- Save / delete articles in database
- User-specific saved article collections

---

## 👨‍💻 About the Author

**Ryan Zomparelli**  
Full-stack software engineering student at TripleTen, focused on building scalable, user-friendly web applications with React, Node.js, and REST APIs.

Based in **Baltimore, MD**.

- [GitHub](https://github.com/RyanZomparelli)
- [LinkedIn](https://www.linkedin.com/in/ryan-zomparelli/)

---
