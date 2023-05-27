import { createBrowserRouter } from 'react-router-dom'
import { Navbar } from './components'
import { CategoryPage, HomePage } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/category/:category',
        element: <CategoryPage />
      }
    ]
  }
])

/*
{
  element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
        loader: redirectIfUser
      },
      {
        path: '/category/:category',
        element: <CategoryPage />,
        loader: ({ request }) =>
          fetch('/api/dashboard.json', {
            signal: request.signal
          })
      }
    ]
}
*/
