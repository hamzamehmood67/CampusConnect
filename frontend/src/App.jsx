import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import HomeLayout from './layout/RootLayout';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import AboutComunityPage from './pages/AboutComunityPage';
import './App.css'
import CreateCommunity from './pages/CreateCommunity';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {

        index: true,
        element: <Home/>
      },
      {
        path: '/about',
        element: <AboutComunityPage/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignupPage/>
  },
  {
    path: '/createcommunity',
    element: <CreateCommunity/>
  }
])

function App() {

  return <div> <RouterProvider router={routes}></RouterProvider></div>
}

export default App
