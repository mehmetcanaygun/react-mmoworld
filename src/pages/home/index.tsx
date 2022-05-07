import { FC } from 'react'
import { Link } from 'react-router-dom'
import { AllGamesBG, PcGamesBG, BrowserGamesBG } from '../../assets'

const HomePage: FC = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Platform - PC */}
      <div
        className="platform platform-pc flex-grow bg-cover bg-fixed bg-no-repeat bg-center group-hover:bg-secondary"
        style={{ backgroundImage: `url(${AllGamesBG})` }}
      >
        <div className="h-full bg-gradient-to-t from-dark flex justify-center items-center relative group hover:bg-none">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 text-4xl text-light font-macondo transition-transform duration-300 group-hover:-translate-y-1/2 md:text-5xl lg:text-7xl">
            <Link to="/games/pc">PC</Link>
          </span>
        </div>
      </div>

      {/* Platform - Browser */}
      <div
        className="platform platform-all flex-grow bg-cover bg-fixed bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${PcGamesBG})` }}
      >
        <div className="h-full bg-gradient-to-t from-dark flex justify-center items-center relative group hover:bg-none">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 text-4xl text-light font-macondo transition-transform duration-300 group-hover:-translate-y-1/2 md:text-5xl lg:text-7xl">
            <Link to="/games/browser">Browser</Link>
          </span>
        </div>
      </div>

      {/* Platform - All */}
      <div
        className="platform platform-browser flex-grow bg-cover bg-fixed bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${BrowserGamesBG})` }}
      >
        <div className="h-full bg-gradient-to-t from-dark flex justify-center items-center relative group hover:bg-none">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 text-4xl text-light font-macondo transition-transform duration-300 group-hover:-translate-y-1/2 md:text-5xl lg:text-7xl">
            <Link to="/games/all">All</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default HomePage
