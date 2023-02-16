import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import {
  CloseModalBtn,
  DivFormRegisterTech,
  BtnCreateTechPink,
} from "./styleDashBordForm";

const TechCreateForm = () => {
  const { techCreate, setCreateTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    techCreate(data);
    console.log(data);
  };

  return (
    <DivFormRegisterTech>
      <form onSubmit={handleSubmit(submit)}>
        <nav>
          <h2>Cadastrar Tecnologia</h2>
          <CloseModalBtn onClick={() => setCreateTech(null)}>X</CloseModalBtn>
        </nav>
        <div>
          <label htmlFor="title">Nome</label>
          <input
            id="title"
            type="text"
            {...register("title")}
            placeholder="Título"
          />
        </div>
        <div>
          <label htmlFor="status">Selecionar status</label>

          <select id="status" {...register("status")} placeholder="Status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
        <BtnCreateTechPink type="submit">
          Cadastrar tecnologia
        </BtnCreateTechPink>
      </form>
    </DivFormRegisterTech>
  );
};
export default TechCreateForm;
