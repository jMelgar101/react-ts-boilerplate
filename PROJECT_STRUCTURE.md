# Project Structure

```
run-registration/
├── src/
│   ├── components/          # Reusable React components
│   │   └── common/          # Common/shared components
│   │       ├── Button.tsx   # Button component with variants
│   │       └── Input.tsx    # Input component with label and error
│   ├── constants/           # Application constants
│   │   ├── api.ts           # API endpoints configuration
│   │   └── paths.ts         # Route paths
│   ├── hooks/               # Custom React hooks
│   │   ├── useApi.ts        # Generic API hook with loading/error state
│   │   └── useLocalStorage.ts # LocalStorage hook
│   ├── interfaces/          # TypeScript interfaces
│   │   ├── ApiResponse.ts   # API response types
│   │   └── User.ts          # User entity interfaces
│   ├── layouts/             # Layout components
│   │   └── MainLayout.tsx   # Main application layout with navigation
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx     # Homepage
│   │   └── CrudPage.tsx     # CRUD operations page
│   ├── routes/              # Route configurations
│   │   └── index.tsx        # Route definitions
│   ├── services/            # API service layer
│   │   └── userService.ts   # User API service
│   ├── styles/              # Global styles
│   │   ├── index.scss       # Main SCSS file with Tailwind imports
│   │   └── variables.scss   # SCSS variables
│   ├── utils/               # Utility functions
│   │   ├── helpers.ts       # General helper functions
│   │   ├── httpClient.ts    # HTTP client wrapper
│   │   └── validators.ts    # Validation functions
│   ├── helpers/             # Additional helpers
│   │   └── formatters.ts    # Data formatting helpers
│   ├── App.tsx              # Main App component with routes
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts        # Vite type definitions
├── .eslintrc.cjs            # ESLint configuration
├── .gitignore               # Git ignore file
├── .prettierignore          # Prettier ignore file
├── .prettierrc              # Prettier configuration
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript config for Node
└── vite.config.ts           # Vite configuration
```

## Key Features

### ✅ Project Setup
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- SCSS support

### ✅ Code Quality
- ESLint configured with TypeScript support
- Prettier for code formatting
- Path aliases configured (@/ for src/)

### ✅ Structure
- Organized by feature/type
- Separation of concerns
- Reusable components
- Service layer for API calls

### ✅ Pages
- **HomePage**: Welcome page with feature overview
- **CrudPage**: Full CRUD implementation with:
  - List all users
  - Create new user (modal)
  - Update existing user (modal)
  - Delete user with confirmation

### ✅ Components
- **Button**: Reusable button with variants (primary, secondary, danger)
- **Input**: Form input with label and error handling

### ✅ Hooks
- **useApi**: Generic hook for API calls with loading/error state
- **useLocalStorage**: Persist data in browser localStorage

### ✅ Services
- **userService**: Complete service for user CRUD operations
- **httpClient**: Generic HTTP client with error handling

### ✅ Utilities
- **helpers**: Date/time formatting, string manipulation
- **validators**: Email, phone, URL validation
- **formatters**: Currency, number, bytes formatting

### ✅ Routes
- React Router configured
- Layout wrapper with navigation
- Easy to extend

## API Endpoints

The project assumes the following API structure:
- `GET /users` - List all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

Note: Update `src/constants/api.ts` with your actual API base URL.

