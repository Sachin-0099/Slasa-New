import { useAuthls
    
 } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/signin"); // Redirect after logout
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
