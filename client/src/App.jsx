import Footer from './layout/footer'
import Navbar from './layout/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Home } from './pages/home'
import { PageTaskDetail } from './pages/PageTaskDetail'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<PageTaskDetail />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
