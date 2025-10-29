# Usage Guide

This guide will help you understand how to use the various features and structures in this project.

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Format Code
```bash
npm run format
```

### Lint Code
```bash
npm run lint
```

### Fix Linting Issues
```bash
npm run lint:fix
```

## Using the API Service

The project includes a complete HTTP client and service layer for API calls.

### Example: Using userService

```typescript
import { userService } from '@/services/userService';

// Get all users
const users = await userService.getAll();

// Get user by ID
const user = await userService.getById(1);

// Create new user
const newUser = await userService.create({ name: 'John', email: 'john@example.com' });

// Update user
const updatedUser = await userService.update(1, { name: 'John Doe' });

// Delete user
await userService.delete(1);
```

### Creating Your Own Service

```typescript
// src/services/productService.ts
import { API_BASE_URL } from '@/constants/api';
import { httpClient } from '@/utils/httpClient';
import { Product } from '@/interfaces/Product';

class ProductService {
  private baseUrl = `${API_BASE_URL}/products`;

  async getAll(): Promise<Product[]> {
    const response = await httpClient.get<Product[]>(this.baseUrl);
    return response.data;
  }
  
  // Add more methods...
}

export const productService = new ProductService();
```

## Using Custom Hooks

### useApi Hook

Generic hook for handling API calls with loading and error states:

```typescript
import { useApi } from '@/hooks/useApi';
import { userService } from '@/services/userService';

function MyComponent() {
  const { data, loading, error, execute, reset } = useApi(() => userService.getAll());

  useEffect(() => {
    execute();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{/* Render data */}</div>;
}
```

### useLocalStorage Hook

Persist data in browser localStorage:

```typescript
import { useLocalStorage } from '@/hooks/useLocalStorage';

function MyComponent() {
  const [value, setValue] = useLocalStorage('my-key', 'default-value');

  return (
    <div>
      <p>Current value: {value}</p>
      <button onClick={() => setValue('new-value')}>Update</button>
    </div>
  );
}
```

## Using Utilities

### Helpers

```typescript
import { formatDate, truncate, debounce } from '@/utils/helpers';

// Format dates
const formatted = formatDate(new Date());

// Truncate strings
const short = truncate('Long text', 10);

// Debounce function
const debouncedSearch = debounce(handleSearch, 300);
```

### Validators

```typescript
import { isValidEmail, isValidUrl } from '@/utils/validators';

if (isValidEmail(email)) {
  // Valid email
}

if (isValidUrl(url)) {
  // Valid URL
}
```

### Formatters

```typescript
import { formatCurrency, formatBytes } from '@/helpers/formatters';

const price = formatCurrency(99.99); // $99.99
const size = formatBytes(1024); // 1 KB
```

## Creating Pages

```typescript
// src/pages/NewPage.tsx
import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';

const NewPage = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <Card title="Page Title">
        <p>Content goes here</p>
        <Button onClick={() => {}}>Click me</Button>
      </Card>
    </div>
  );
};

export default NewPage;
```

Then add the route to `src/App.tsx`:

```typescript
import NewPage from './pages/NewPage';

// In App component
<Route path="new-page" element={<NewPage />} />
```

## Creating Components

```typescript
// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  count?: number;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, count = 0 }) => {
  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <h3>{title}</h3>
      <p>Count: {count}</p>
    </div>
  );
};
```

## Styling

### Using Tailwind CSS

```tsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Click
  </button>
</div>
```

### Using SCSS Variables

```scss
// In your component's scss file
@import '../styles/variables';

.my-component {
  color: $primary-color;
  padding: $spacing-md;
  border-radius: $border-radius-lg;
}
```

## TypeScript

### Defining Interfaces

```typescript
// src/interfaces/Product.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export interface CreateProductDto {
  name: string;
  price: number;
  description?: string;
}
```

RULES

## Best Practices

1. **Always use TypeScript** - Define proper types for all functions and components
2. **Follow the folder structure** - Keep files organized by their purpose
3. **Use path aliases** - Import using `@/` prefix instead of relative paths
4. **Keep components small** - Split large components into smaller, reusable pieces
5. **Use custom hooks** - Extract logic into reusable hooks
6. **Handle errors** - Always handle API errors gracefully
7. **Show loading states** - Provide feedback during async operations
8. **Format code** - Run prettier before committing
9. **Lint code** - Fix any linting issues before pushing

