import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";

import { DivTechUpdateForm, CloseModalBtn, BtnCreateTechPink,RemoveTech } from "./styleTechUpdateForm";

const TechUpdateForm = () => {
  const { techUpdate, editindTech, setEditindTech, techRemove } =
    useContext(TechContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      status: editindTech.status,
    },
  });

  const submit = (data) => {
    techUpdate(data, editindTech.id);
    console.log(data);
  };

  return (
    <DivTechUpdateForm>
      <form onSubmit={handleSubmit(submit)}>
        <nav>
          <h2>Atualizar tecnologia</h2>
          <CloseModalBtn onClick={() => setEditindTech(null)}>X</CloseModalBtn>
        </nav>
        
        <div>
        <h2>Nome:</h2>
        <h3>{editindTech.title}</h3>
        </div>

        <div>
          <label htmlFor="status">Atualizar Status</label>
          <select id="status" {...register("status")} placeholder="Status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
        <div>
        <BtnCreateTechPink type="submit">Salvar alterações</BtnCreateTechPink>

      <RemoveTech
        onClick={() => [techRemove(editindTech.id), setEditindTech(null)]}
      >
        Excluir
      </RemoveTech>
        </div>
      </form>
    </DivTechUpdateForm>
  );
};
export default TechUpdateForm;
