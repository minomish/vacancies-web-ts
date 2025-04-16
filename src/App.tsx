import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
