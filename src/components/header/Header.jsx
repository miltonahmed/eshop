import MiddleBar from './MiddleBar'
import Navbar from './Navbar'
import TopBar from './topbar/TopBar'

const Header = () => {
  return (
    <>
      <TopBar/>
      <MiddleBar/>
      <Navbar/>
    </>
  )
}

export default Header