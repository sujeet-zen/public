import React, { useEffect } from "react";
import UserImage from "../../assets/images/user.jpg";
import adminLogo from '../../assets/images/admin_logo.svg'
import chatIcon from '../../assets/images/ChatIcon.svg'
import notifyIcon from '../../assets/images/NotificationIcon.svg'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);  
  const username = useSelector((state) => state.login.username);
  const options = [ 
    { value: "user", label: "user"}
  ]

  const handleLogout = () => {    
    localStorage.removeItem("token");
    navigate('/');
    toast.success("Logout successful!", {
      autoClose: 1000, // 3 seconds
      // hideProgressBar: true,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {      
      navigate('/');
    }
  }, []);

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-10 bg-white md:flex-row md:flex-nowrap flex justify-between p-4 px-10">
      <div className="flex flex-row ">
      <div className="pr-10"><img src={adminLogo} alt="Logo" /></div>
      <div><h1 className="font-semibold text-2xl">Trips</h1></div>
      </div>
      <div className="flex flex-row ">
        <div><img src={chatIcon} alt="Logo" /></div>
        <div className="pl-5"><img src={notifyIcon} alt="Logo" /></div>
        {/* <div className="pl-5"><select>
  <option value="user">sujeet</option>
  <option value="logout">logout</option>  
</select></div> */}
 {isLoggedIn && username ? (
            <div className="pl-5">            
              <h1>{username}</h1>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="pl-5">              
              <button>Login</button>
            </div>
          )}
      </div>
    </div>    
    </>
  );
};

export default Header;





