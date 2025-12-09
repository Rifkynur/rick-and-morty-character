# Rick & Morty Explorer

A simple and modern web application built with **Next.js**, **shadcn/ui**, **React Query**, **Zustand**, and **Tailwind CSS**.  
This app allows users to browse characters, episodes, and mark favorite characters using local persistent storage.

## 🚀 Tech Stack

- **Next.js 16** — App Router, Client Components
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** — Reusable UI components
- **React Query** — Server state management & data fetching
- **Zustand** — Client state management (Favorites state)
- **Axios** — HTTP client
- **Lucide Icons**
- **Use-debounce** — Search input debounce
- **LocalStorage persist** — Save favorite characters

---

## 📂 Features

### 🔍 Character Browser

- Search characters by name
- Filter by status (Alive, Dead, Unknown)
- Filter by gender
- Pagination support
- Skeleton loading state

### ⭐ Favorite Characters

- Add/remove favorites
- Persistent favorites using `localStorage`
- Favorite list page

### 📄 Character Detail Page

- View character information (status, gender, species, origin, location)
- Episode list with scroll area
- Favorite toggle (red/green button)

### 📺 Episode Detail Page

- Episode info (episode code, air date)
- List of cast characters

### 🌓 Theme Ready (Light/Dark)

- Tailwind + shadcn class-based theme support

---

## 🛠️ Installation

```bash
git clone https://github.com/Rifkynur/rick-and-morty-character
cd your-project
npm install
npm run dev
```

The app will run on
http://localhost:3000

---

## Script

- npm run dev # Start development server
- npm run build # Build production
- npm run start # Start production server

---

## Build Time

- Total Time 14 hours
- Setup 1 hours
- UI 7 hours
- API 6 hours
