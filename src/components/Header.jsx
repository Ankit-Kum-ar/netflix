import logo from "../assets/netflix-logo.png"
const Header = () => {
    return (
      <div>
        <div className="px-32 py-2 bg-gradient-to-b from-gray-950">
          <img className="w-48" src={logo} alt="logo" />
        </div>
      </div>
    )
  }
  
  export default Header
  