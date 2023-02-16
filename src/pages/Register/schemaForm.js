import * as yup from "yup";


export const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("email inválido").email(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minuscula")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/(\W|_)/, "Deve conter ao menos um caracterer especial")
      .min(8, "a senha precisa conter no minimo 8 digitos"),
    passwordConfirmation: yup
      .string()
      .required("Campo obrigatório")
      .oneOf(
        [yup.ref("password")],
        "A Confirmação de senha deve ser igual a senha"
      ),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
  });