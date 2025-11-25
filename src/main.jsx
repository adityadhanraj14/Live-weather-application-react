import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { WeatherProvider } from './contexts/WeatherContext.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </WeatherProvider>
    </QueryClientProvider>
  </StrictMode>,
)
