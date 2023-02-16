import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);

          navigate("/profile");
        } catch (error) {
          console.log(error);
        }
      };
      userAutoLogin();
    }
  }, []);

  const registerForm = async (data) => {
    try {
      const response = await api.post("/users", data);

      toast.success("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(`${response.data.message}`);
    }
  };

  const loginForm = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);

      localStorage.setItem("authToken", response.data.token);
      toast.success(`Usuário ${response.data.user.name} Logado com sucesso`);

      navigate(`/profile`);
    } catch (error) {
      console.log(error);
      toast.error("Senha ou email inválido");
    }
  };

  function logout() {
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/");
    toast.success("Usuário deslogado com sucesso");
  }

  return (
    <UserContext.Provider value={{ user, registerForm, loginForm, logout }}>
      {children}
    </UserContext.Provider>
  );
};
