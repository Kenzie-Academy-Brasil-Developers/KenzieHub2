import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [tech, setTech] = useState([]);
  const [editindTech, setEditindTech] = useState(null);
  const [createTech, setCreateTech] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const dashBoardForm = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTech(response.data.techs);
        } catch (error) {
          console.log(error);
        }
      };
      dashBoardForm();
    }
  }, []);

  const techCreate = async (data) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia criada com sucesso");
      setTech([...tech, response.data]);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado...");
    }
  };

  const techRemove = async (noteId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await api.delete(`/users/techs/${noteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia apagada com sucesso");

      const newTech = tech.filter((techs) => techs.id !== noteId);

      setTech(newTech);
    } catch (error) {
      console.log(error);
    }
  };

  const techUpdate = async (data, noteId) => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await api.put(`/users/techs/${noteId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia atualizada com sucesso");

      const newTechUpdate = tech.map(techs => {
        if (noteId === techs.id) {
          return { ...techs, ...data };
        } else {
          return techs;
        }
      });

      setTech(newTechUpdate);
    } catch (error) {
      console.log(error);
      toast.error('Ops, algo deu errado')
    }

  };

  return (
    <TechContext.Provider value={{ tech, techCreate, techRemove, techUpdate, editindTech, setEditindTech, createTech, setCreateTech}}>
      {children}
    </TechContext.Provider>
  );
};
