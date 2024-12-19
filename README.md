# Todo Application Frontend

A modern Todo application built with Next.js 15, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js (LTS version)
- npm or yarn
- Backend service running (see main README.md)

## Features

- ✨ Create, edit, and delete tasks
- 🎨 Color coding for tasks
- ⚡ Real-time status updates
- 📱 Responsive design
- 🚨 Error handling and loading states

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
   - Ensure the backend service is running on port 4000
   - The API URL is configured in `src/lib/api.ts` (default: http://localhost:4000/api)

3. Start the development server:
```bash
npm run dev
```

The frontend application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── app/            # Next.js app router pages
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/           # Utility functions and API client
├── types/         # TypeScript type definitions
└── utils/         # Constants and helper functions
```

## Available Scripts

- `npm run dev` - Start development server with turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

- `TaskForm` - Handles task creation and editing
- `TaskCard` - Displays individual task items
- `DeleteDialog` - Confirmation dialog for task deletion
- `Header` - Application header with branding
- `Loading` - Loading state component
- `Error` - Error state component

## State Management

The application uses custom React hooks for state management:
- `useTasks` - Manages task CRUD operations and state

## API Integration

API calls are centralized in `src/lib/api.ts` with the following endpoints:
- GET /tasks - Fetch all tasks
- GET /tasks/:id - Get single task
- POST /tasks - Create new task
- PUT /tasks/:id - Update task
- DELETE /tasks/:id - Delete task

## Styling

- Tailwind CSS for styling
- Custom color scheme defined in globals.css
- Responsive design breakpoints
