import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";

import axios from "axios";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // 1. Login function
    const login = (token, userData, rememberMe) => {

        // Clear any previous session
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");

        // Select storage based on Remember Me
        const storage = rememberMe ? localStorage : sessionStorage;

        storage.setItem("token", token);
        storage.setItem("user", JSON.stringify(userData));

        setUser(userData);
    };


    // 2. Logout function
    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");

        setUser(null);
    };


    // 3. Verify existing authentication
    useEffect(() => {

        const checkAuth = async () => {

            const token =
                localStorage.getItem("token") ||
                sessionStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {

                const response = await axios.get(
                    "http://localhost:8000/api/auth/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const userData = response.data.user;

                setUser(userData);

                // Update user information in the storage
                if (localStorage.getItem("token")) {
                    localStorage.setItem(
                        "user",
                        JSON.stringify(userData)
                    );
                } else {
                    sessionStorage.setItem(
                        "user",
                        JSON.stringify(userData)
                    );
                }

            } catch (error) {

                localStorage.removeItem("token");
                localStorage.removeItem("user");

                sessionStorage.removeItem("token");
                sessionStorage.removeItem("user");

                setUser(null);

            } finally {

                setLoading(false);

            }
        };

        checkAuth();

    }, []);


    // 4. Provide authentication data
    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: Boolean(user),
                loading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


// 5. Custom authentication hook
export const useAuth = () => {
    return useContext(AuthContext);
};