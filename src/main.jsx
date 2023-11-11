import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './services/redux/store.js'
import { Provider } from 'react-redux'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      // {
      //   path: "team",
      //   element: <Team />,
      //   loader: teamLoader,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Provider>,
)
