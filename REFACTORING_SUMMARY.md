# Container/Component Separation Refactoring

## Overview

Refactored the CRUD page to separate concerns by following the Container/Presenter pattern (also known as Smart/Dumb components pattern).

## Changes Made

### New Files Created

1. **`src/containers/CrudContainer.tsx`**
   - Container component that handles all business logic
   - Manages state (users, loading, modal, form data)
   - Handles API calls through the user service
   - Contains all event handlers (onEdit, onDelete, onSubmit, etc.)
   - Passes data and callbacks as props to the page component

2. **`src/components/user/UserModal.tsx`**
   - Presentational component for the user creation/editing modal
   - Receives props for all state and handlers
   - Focused solely on rendering the modal UI

3. **`src/components/user/UserTable.tsx`**
   - Presentational component for the user table
   - Receives users and event handlers as props
   - Focused solely on rendering the table UI

4. **`src/components/user/index.ts`**
   - Barrel export file for user components

### Modified Files

1. **`src/pages/CrudPage.tsx`** (Refactored from ~200 lines to ~75 lines)
   - Now a pure presentational component
   - Receives all data and handlers as props
   - No business logic, only UI rendering
   - Uses extracted UserModal and UserTable components

2. **`src/App.tsx`**
   - Updated to import and use `CrudContainer` instead of `CrudPage`

3. **`src/routes/index.tsx`**
   - Updated to import and use `CrudContainer` instead of `CrudPage`

## Architecture Benefits

### ✅ Separation of Concerns
- **Container**: Handles state, API calls, and business logic
- **Pages**: Focus on layout and composition
- **Components**: Reusable, testable UI pieces

### ✅ Testability
- Container can be tested independently with mocked API services
- Presentational components can be tested with simple props
- Easier to test UI logic without API dependencies

### ✅ Reusability
- `UserModal` and `UserTable` can be reused in other contexts
- Presentational components are framework-agnostic and easier to reuse

### ✅ Maintainability
- Clear boundaries between logic and presentation
- Easier to locate and fix bugs
- Easier to modify UI without touching business logic

### ✅ Readability
- Each file has a single, clear responsibility
- Smaller files are easier to understand
- Clearer component hierarchy

## Component Hierarchy

```
CrudContainer (Container)
└── CrudPage (Presentational)
    ├── Button (Common Component)
    ├── UserTable (Presentational)
    └── UserModal (Presentational)
        ├── Button (Common Component)
        └── Input (Common Component)
```

## Data Flow

1. Container fetches data from API
2. Container passes data to Page via props
3. Page passes data to child components (Table, Modal)
4. User interactions trigger callbacks
5. Callbacks flow up: Component → Page → Container
6. Container updates state and triggers API calls
7. State updates flow down again

## Pattern Usage Guide

### When to Use Containers

Use containers when a component needs to:
- Manage state
- Make API calls
- Handle complex business logic
- Use multiple hooks for data fetching

### When to Use Presentational Components

Use presentational components when they:
- Only receive props and render UI
- Have no internal state or side effects
- Are easily testable with just props
- Can be reused across different contexts

## Future Improvements

1. Add loading skeletons for better UX
2. Add error boundary for graceful error handling
3. Extract form validation into a custom hook
4. Consider using React Query or SWR for better data fetching
5. Add unit tests for container and components

