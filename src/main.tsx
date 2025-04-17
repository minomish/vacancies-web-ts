import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Импортируем QueryClient и QueryClientProvider

// Создаем экземпляр QueryClient
const queryClient = new QueryClient();

// Рендерим приложение с оберткой QueryClientProvider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);


// // src/index.tsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// // Создаем новый QueryClient
// const queryClient = new QueryClient();

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// // Оборачиваем приложение в QueryClientProvider и передаем созданный queryClient
// root.render(
//   <QueryClientProvider client={queryClient}>
//     <App />
//   </QueryClientProvider>
// );
