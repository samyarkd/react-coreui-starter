import React, { Component, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/umd/react-router-dom.development'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
