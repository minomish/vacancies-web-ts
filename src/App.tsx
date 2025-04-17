import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage'
import JobList from './components/JobList'

function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/joblist" element={<JobList/>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
