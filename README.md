# 📱 React Native Clean Architecture  

A production-ready starter template for building **scalable and maintainable** mobile apps using:  

- [Expo Router](https://docs.expo.dev/router/introduction/) – File-based routing for Expo  
- [Nativewind](https://www.nativewind.dev/v4/overview/) – Tailwind CSS styling in React Native  
- [React Query](https://tanstack.com/query/latest) – Data fetching & caching  
- Clean, **feature-first folder design** for long-term scalability  

---

## ✨ Features  

- 🔎 **Expo Router** – Simple file-based navigation with nested routes & tabs  
- 🎨 **Tailwind / Nativewind** – Utility-first styling, fully responsive  
- ⚡ **React Query** – Built-in API layer with caching & offline support  
- 🧩 **Feature-based architecture** – Organize screens, components, and logic by domain  
- 🛠️ **Best practices pre-configured** – ESLint + Prettier + TypeScript  

---

## 📂 Project Structure  

```
app/                  # App entry with Expo Router
 ├─ (tabs)/           # Tab navigation group
 │   ├─ home/         # Feature: Home
 │   │   └─ index.tsx
 │   ├─ history/      # Feature: History
 │   │   └─ index.tsx
 │   ├─ settings/     # Feature: Settings
 │   │   └─ index.tsx
 └─ _layout.tsx       # Root layout with providers (Query, Theme, etc.)

src/                  # Shared resources
 ├─ features/         # Domain features (auth, stats, etc.)
 ├─ shared/           # Reusable UI components, hooks, utils
 └─ lib/              # Config & core libraries (queryClient, api, etc.)
```

---

## 🚀 Getting Started  

1. **Clone the repo**  
   ```sh
   git clone https://github.com/your-username/clean-rn-pattern.git
   cd clean-rn-pattern
   ```

2. **Install dependencies**  
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the app**  
   ```sh
   npx expo start
   ```

4. Open in **iOS simulator**, **Android emulator**, or the **Expo Go app**.

---

## 📦 Build & Deploy  

Using [Expo Application Services (EAS)](https://expo.dev/eas):  

- **Build iOS / Android app**  
  ```sh
  npx eas build
  ```  
- **Deploy OTA updates**  
  ```sh
  npx eas update
  ```  
- **Deploy Web**  
  ```sh
  npx eas deploy
  ```  

---

## 🧑‍💻 Development  

- **Lint & Format**  
  ```sh
  npm run lint
  npm run format
  ```  

- **Folder naming convention**  
  - Features live under `src/features/*`  
  - Shared UI & utilities under `src/shared/*`  
  - Keep screens inside `app/(tabs)` or other router groups  

---

## 📖 Documentation  

- [Expo Router Docs](https://docs.expo.dev/router/introduction/)  
- [Nativewind Docs](https://www.nativewind.dev/v4/overview/)  
- [TanStack Query Docs](https://tanstack.com/query/latest)  

---

## 🤝 Contributing  

Contributions are welcome!  
Please open an issue or submit a PR to improve the boilerplate.  

---

## 📄 License  

MIT License © 2025 [Your Name]  
