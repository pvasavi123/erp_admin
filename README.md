# FinAccrual (ERP Sync Admin)

A modern, high-performance React dashboard designed for accounting firms to manage clients, accrual schedules, journal entries, master data, and workflows. 

## 🚀 Features

- **Global Monolithic State**: The entire application runs on a centralized, highly-reactive state tree using React Context and Reducers, ensuring data is instantly synchronized across all views (e.g., adding a client instantly updates the Dashboard statistics).
- **Authentication Gateway**: Secure login screen with glassmorphism aesthetics that gates access to the application data.
- **Dynamic Dashboard**: Real-time statistical tracking of Active Clients, Active Schedules, Journal Entries, and Data Uploads.
- **Entity Management**: Fully functional CRUD interfaces for Clients, Schedules, Accounts, and Journal Entries.
- **Advanced Filtering & Search**: Instant, client-side text filtering across all major data tables.
- **Premium UI/UX**: Built with modern CSS variables, soft shadows, micro-animations, and clean typography. Toast notifications provided by `sonner`.

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Routing**: React Router DOM v6
- **State Management**: Context API + `useReducer` (Monolithic Store Pattern)
- **Styling**: Vanilla CSS with Design Tokens (`src/styles/admin.css`)
- **Icons**: `lucide-react`
- **Notifications**: `sonner`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── layout/          # Sidebar, Header, etc.
├── context/             # Global State Management
│   └── AppContext.tsx   # The Monolithic Store & Reducers
├── layouts/             # Page Layout wrappers
│   └── AdminLayout.tsx  # Main authenticated wrapper
├── modules/             # Feature-based architecture
│   ├── auth/            # Login screen
│   ├── dashboard/       # Main statistical dashboard
│   ├── clients/         # Client management
│   ├── schedules/       # Accrual schedules
│   ├── master-data/     # Chart of Accounts
│   ├── journal-entries/ # JE tracking and posting
│   ├── exports/         # Export management
│   ├── workpapers/      # Workpaper generation
│   └── bulk-upload/     # CSV/Excel upload simulation
├── routes/              # Application routing definitions
│   └── AppRoutes.tsx    # Auth guards and route mapping
└── styles/              # Global CSS and Design Tokens
```

## 🧠 State Architecture (`AppContext.tsx`)

The application utilizes an advanced monolithic state pattern. Instead of components managing their own local mock data, everything is stored in a single source of truth (`AppState`). 

Components consume the state via the `useAppState()` hook and trigger updates using strict reducer actions:

### Available Actions:
- `LOGIN` / `LOGOUT`: Handles authentication gating.
- `ADD_CLIENT`: Injects a new client into the global store.
- `ADD_SCHEDULE`: Creates a new accrual schedule.
- `ADD_ACCOUNT`: Updates the global Chart of Accounts.
- `ADD_JOURNAL_ENTRY` / `POST_JOURNAL_ENTRIES`: Manages JE lifecycles.
- `ADD_EXPORT` / `ADD_WORKPAPER` / `ADD_UPLOAD`: Manages background task simulation.

## ⚙️ Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Login**
   - The app is protected by a mock authentication gateway.
   - You can enter **any** email and password to access the dashboard.
   - Click **Logout** at the bottom of the sidebar to clear the session.

## 🎨 Design System

The application uses a strict design system defined in `src/styles/admin.css`:
- **Primary Color**: `#2563eb` (Blue)
- **Secondary Color**: `#1e293b` (Slate)
- **Backgrounds**: `#f8fafc` for main app, `#ffffff` for cards/panels.
- **Typography**: Inter (or system sans-serif), leveraging hierarchical font weights (400, 500, 600, 700).
