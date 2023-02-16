import KenzieHubLogo from "/src/assets/KenzieHubLogo.png";
import { DashboardFormStyle, DivInitialPag, DivRenderTech, BtnCreateTech } from "./styleDashboard";
import React, { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { TechContext } from "../../providers/TechContext";
import TechCreateForm from "../../components/Input/DashBoardForm/dashform";
import { SiAddthis } from "react-icons/si";
import TechUpdateForm from "../../components/Input/TechUpdateForm/TechUpdateForm";

export default function Authenticator() {
  const { user, logout } = useContext(UserContext);
  const { tech, setEditindTech, editindTech, createTech, setCreateTech } =
    useContext(TechContext);

  return (
    <DashboardFormStyle>
      <nav>
        <img src={KenzieHubLogo} alt="Logo" />
        <button className="returnPage" type="submit" onClick={() => logout()}>
          Sair
        </button>
      </nav>
      <header>
        <div>
          <h3> Olá, {user.name}</h3>
          <p>{user.course_module}</p>
        </div>
      </header>
      <main>
        {editindTech ? <TechUpdateForm /> : null}
        {createTech ? <TechCreateForm /> : null}

        {tech.length > 0 ? (
          <DivRenderTech>
            <nav>
              <h2>Tecnologia</h2>
              <BtnCreateTech onClick={() => setCreateTech(user)}>
                <SiAddthis color="white" />
              </BtnCreateTech>
            </nav>
            <ul>
              {tech.map((profile) => (
                <li key={profile.id}>
                  <h3>{profile.title}</h3>
                  <p>{profile.status}</p>
                  <button onClick={() => setEditindTech(profile)}>
                    Atualizar
                  </button>
                </li>
              ))}
            </ul>
          </DivRenderTech>
        ) : (
          <>
              <nav>
              <h2>Tecnologia</h2>
              <BtnCreateTech onClick={() => setCreateTech(user)}>
                <SiAddthis color="white" />
              </BtnCreateTech>

              </nav>
            <DivInitialPag>
            <p>Nenhuma tecnologia foi cadastrada ainda</p>
            </DivInitialPag>
          </>
          
          
        )}
      </main>
    </DashboardFormStyle>
  );
}
