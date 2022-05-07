import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameContext from '../../context/GameContext'

const GamesPage = () => {
  const gameContext = useContext(GameContext)
  const { platform } = useParams()

  useEffect(() => {
    if (platform) gameContext?.getGames(platform)
  }, [gameContext, platform])

  return (
    <div className="h-screen">
      <div className="container mx-auto px-2 py-5 md:px-0">Games</div>
    </div>
  )
}

export default GamesPage
