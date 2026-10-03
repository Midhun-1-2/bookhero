import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/fonts.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/ui.css'
import './styles/admin.css'
import './styles/staff.css'
import './styles/pages.css'
import { AuthProvider } from './hooks/useAuth'
import { ToastProvider } from './hooks/useToast'
import { DraftProvider } from './hooks/useDraft'
import { AppRoutes } from './routes/AppRoutes'
import { PushToasts } from './components/layout/PushToasts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <DraftProvider>
            <Suspense fallback={<div className="boot" aria-busy="true" />}>
              <AppRoutes />
            </Suspense>
            <PushToasts />
          </DraftProvider>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
