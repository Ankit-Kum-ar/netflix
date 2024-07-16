import { signOut } from "firebase/auth";
import logo from "../assets/netflix-logo.png"
import { FaUser } from "react-icons/fa";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/Slices/userSlice";
const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

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
          
  
        } else { // When user Sign-Out then this condition execute.
  
          // Here we dispatch the user to store.
          dispatch(removeUser());
          navigate('/')
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
    return (
      <div>
        <div className="md:pl-32 pl-3 py-2 bg-gradient-to-b from-gray-950 flex justify-between">
          <img className="md:w-48 w-32" src={logo} alt="logo" />
          {
            // Check if user sign in or sign out, bcz userSlice is null if user is signOut.
            user ? (
              <div className="my-4 pr-12">
                <button className="bg-red-700 p-2 px-4 rounded-md text-white font-semibold flex gap-2" onClick={handleSignOut}>
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
  