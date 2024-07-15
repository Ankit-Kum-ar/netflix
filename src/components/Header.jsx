import logo from "../assets/netflix-logo.png"
const Header = () => {
    return (
      <div>
        <div className="md:px-32 px-3 py-2 bg-gradient-to-b from-gray-950">
          <img className="md:w-48 w-32" src={logo} alt="logo" />
        </div>
      </div>
    )
  }
  
  export default Header
  