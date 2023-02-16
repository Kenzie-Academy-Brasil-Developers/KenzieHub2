import { Link } from "react-router-dom";
import KenzieHubLogo from "/src/assets/KenzieHubLogo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./schemaForm";
import { DivRegisterForm } from "./styleRegister";
import { Input } from "../../components/Input/input";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";

export default function Register() {
  const { registerForm } = useContext(UserContext);

  const submit = (data) => {
    registerForm(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <DivRegisterForm>
      <nav>
        <img src={KenzieHubLogo} alt="Logo" />
        <Link className="returnPage" to="/">
          Voltar
        </Link>
      </nav>

      <form onSubmit={handleSubmit(submit)}>
        <h2>Crie sua conta</h2>
        <h3>Rápido e grátis, vamos nessa</h3>

        <Input
          label="Nome"
          id="name"
          type="text"
          placeholder="Digite seu nome"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Email"
          id="email"
          type="text"
          placeholder="Digite seu email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Senha"
          id="password"
          type="password"
          placeholder="Digite sua senha"
          error={errors.password?.message}
          {...register("password")}
        />

        <Input
          label="Confirme sua senha"
          id="passwordConfirmation"
          type="password"
          placeholder="Confirme sua senha"
          error={errors.passwordConfirmation?.message}
          {...register("passwordConfirmation")}
        />

        <Input
          label="bio"
          id="bio"
          type="text"
          placeholder="Fale sobre você"
          error={errors.bio?.message}
          {...register("bio")}
        />

        <Input
          label="Contato"
          id="contact"
          type="text"
          placeholder="Opção de contato"
          error={errors.contact?.message}
          {...register("contact")}
        />

        <div>
          <label htmlFor="course_module">Selecionar Módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option value="m1">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="m2">Segundo módulo (Frontend Avançado)</option>
            <option value="m3">Terceiro módulo (Introdução ao Backend)</option>
            <option value="m4">Quarto módulo (Backend Avançado)</option>
          </select>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </DivRegisterForm>
  );
}
