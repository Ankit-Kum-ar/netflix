import { signOut } from "firebase/auth";
import logo from "../assets/netflix-logo.png"
import { FaUser } from "react-icons/fa";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/Slices/userSlice";
import { deleteMovies, toggleGeminiSearchView } from "../redux/Slices/geminiSlice";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [isAbsolute, setIsAbsolute] = useState(false);
    const geminiSearch = useSelector((store) => store.gemini?.showGeminiSearch);

    // Call the API of onAuthStateChange (this is like an event listener, so called at once).
    // At once can be done by useEffect().
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        // When user Sign-In or Sign-out then this condition execute.
        if (user) { 
  
          const {uid, email, displayName} = user;
          // Here we dispatch the user to store.
          dispatch(addUser({uid,email,displayName}));
          navigate('/browser')
          setIsAbsolute(true)
          
  
        } else { // When user Sign-Out then this condition execute.
  
          // Here we dispatch the user to store.
          dispatch(removeUser());
          navigate('/')
          setIsAbsolute(false);
        }
      });
    }, [])
    
    const handleSignOut = () => {
      // Here write the signOut Logic for sign out the user from App using firebox
      signOut(auth).then(() => {
      }).catch((error) => {
        // An error happened.
      }); 
    }

    const handleGptButton = () => {
      dispatch(toggleGeminiSearchView());
      dispatch(deleteMovies());
      // setIsAbsolute(!isAbsolute);
    }


    return (
      <div className={` ${isAbsolute ? 'bg-black  top-0 w-screen absolute' : ''}`}>
        <div className="md:pl-14 pl-3 py-2 bg-gradient-to-b from-gray-950 flex justify-between">
          <img className="md:w-48 w-28" src={logo} alt="logo" />
          {
            // Check if user sign in or sign out, bcz userSlice is null if user is signOut.
            user ? (
              <div className="md:my-4 md:mr-12 mr-3 mb-2 mt-3.5 flex md:gap-8 gap-5">
                <button className="md:p-2 p-1 md:px-4 bg-red-900 md:py-0 text-white md:rounded-md rounded md:text-base text-[9px] md:font-semibold font-medium" onClick={handleGptButton}>
                  {geminiSearch ? <span className="flex justify-center items-center" ><FaHome /> &nbsp; Home</span> : 
                    <span className="flex justify-center items-center" ><FaSearch /> &nbsp; Search</span>}
                </button>
                <button className="bg-red-700 md:p-2 p-1 md:px-4 md:rounded-md rounded md:text-base text-[9px] text-white md:font-semibold font-medium flex md:gap-2 gap-1 justify-center items-center" onClick={handleSignOut}>
                  <span className="my-1"><FaUser /></span>
                  Sign Out
                </button>
            </div>
            ) : <></>
          }
        </div>
      </div>
    )
  }
  
  export default Header
  