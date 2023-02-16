import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import KenzieHubLogo from "/src/assets/KenzieHubLogo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { formSchemaLogin } from "./schemaForm";
import { DivLoginForm } from "./styleLogin";
import { Input } from "../../components/Input/input";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";

export default function Login() {
  const { loginForm } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

  const submit = (data) => {
    
    loginForm(data);
  };

  return (
    <DivLoginForm>
      <img src={KenzieHubLogo} alt="Logo" />

      <form onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
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

        <button type="submit">Entrar</button>

        <p>Ainda não possui uma conta?</p>
        <Link className="linkToRegister" to="/users">
          Cadastre-se
        </Link>
      </form>
    </DivLoginForm>
  );
}
