import GameProvider from './context/GameProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, GamesPage, GameDetailPage, NotFoundPage } from './pages'
import './style/input.css'

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/:platform" element={<GamesPage />} />
          <Route path="/games/:platform/:id" element={<GameDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </GameProvider>
  )
}

export default App
