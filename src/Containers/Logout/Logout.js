import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../UserContext";

function Logout(props) {
  useEffect(() => {
    onLogout();
  }, []);
  let navigate = useNavigate();
  const user = useContext(UserContext);
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
    user.logout();
    navigate("/");
  };
  //if (!user.auth) {
  // navigate("/");
  //}

  return;
}

export default Logout;
