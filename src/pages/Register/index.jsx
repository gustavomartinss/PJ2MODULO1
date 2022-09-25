import { Input } from "../../components/Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";
import axios from "axios";

export function Register() {
  const navigate = useNavigate();

  const updateUserValidationSchema = yup
    .object({
      fullName: yup.string().required("Preenchimento obrigatório"),
      email: yup.string().email("E-mail inválido").required("Preenchimento obrigatório"),
      photoUrl: yup.string(),
      phone: yup.string(),
      zipCode: yup.string().required("Preenchimento obrigatório"),
      street: yup.string().required("reenchimento obrigatório"),
      city: yup.string().required("reenchimento obrigatório"),
      state: yup.string().required("reenchimento obrigatório"),
      complement: yup.string(),
      number: yup.string().required("reenchimento obrigatório"),
      neighborhood: yup.string().required("reenchimento obrigatório"),
      password: yup
        .string()
        .nullable()
        .min(8, "A senha deve conter no mínimo 8 caracteres")
        .notRequired(),
      passwordConfirmation: yup.string().when("password", {
        is: (value) => value !== undefined,
        then: yup
          .string()
          .oneOf(
            [yup.ref("password"), null],
            "As senhas precisam ser idênticas."
          )
          .min(8, "A senha deve conter no mínimo 8 caracteres"),
      }),
    })
    .required();

  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(updateUserValidationSchema),
  });

  const zipCode = register("zipCode");

  function handleSearchZipCode() {
    axios
      .get(
        `${import.meta.env.VITE_APP_API_VIA_CEP}/${getValues("zipCode")}/json`
      )
      .then((response) => {
        const address = response.data;

        setValue("street", address.logradouro);
        setValue("neighborhood", address.bairro);
        setValue("state", address.uf);
        setValue("city", address.localidade);
      });
  }

  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  async function handleRegisterUser(values) {
    const {
      email,
      password,
      fullName,
      photoUrl,
      phone,
      zipCode,
      street,
      number,
      neighborhood,
      city,
      state,
      complement,
    } = values;

    await delay(2000);

    api
      .post(`/auth/register`, {
        email,
        password,
        fullName,
        photoUrl,
        phone,
        userAddress: {
          zipCode,
          street,
          number,
          neighborhood,
          city,
          state,
          complement,
        },
      })
      .then(() => {
        navigate("/");
        toast.success("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        toast.error(error.response.data.error || "Ocorreu um erro!");
      });
  }

  return (
    <S.Container>
      <S.Card>
        <S.Splitter>
          <S.Banner></S.Banner>
        </S.Splitter>

        <S.Splitter>
          <S.Content>
            <S.Heading>Olá! Conte-nos um pouco sobre você.</S.Heading>

            <S.SignUpForm onSubmit={handleSubmit(handleRegisterUser)}>
              <Input
                placeholder="Seu nome completo"
                label="Nome Completo*"
                {...register("fullName")}
                errorMessage={errors.fullName?.message}
              />

              <Input
                name="email"
                placeholder="Seu e-mail"
                label="E-mail*"
                {...register("email")}
                errorMessage={errors.email?.message}
              />

              <Input
                placeholder="URL da foto"
                label="Foto de perfil"
                {...register("photoUrl")}
                errorMessage={errors.photoUrl?.message}
              />

              <Input
                placeholder="Seu telefone"
                label="Telefone"
                {...register("phone")}
                errorMessage={errors.phone?.message}
              />

              <Input
                placeholder="Seu CEP"
                label="CEP*"
                {...zipCode}
                errorMessage={errors.zipCode?.message}
                onChange={(e) => {
                  zipCode.onChange(e);
                  if (e.target.value.length === 8) {
                    handleSearchZipCode();
                  }
                }}
              />

              <Input
                placeholder="Seu Endereço"
                label="Endereço*"
                {...register("street")}
                errorMessage={errors.userAddress?.street?.message}
              />

              <Input
                placeholder="Seu estado"
                label="Estado*"
                {...register("state")}
                errorMessage={errors.userAddress?.state?.message}
              />

              <Input
                placeholder="Sua cidade"
                label="Cidade*"
                {...register("city")}
                errorMessage={errors.userAddress?.city?.message}
              />

              <Input
                placeholder="Complemento do seu endereço"
                label="Complemento"
                {...register("complement")}
                errorMessage={errors.userAddress?.complement?.message}
              />

              <Input
                placeholder="Seu número"
                label="Número*"
                {...register("number")}
                errorMessage={errors.userAddress?.number?.message}
              />

              <Input
                placeholder="Seu bairro"
                label="Bairro*"
                {...register("neighborhood")}
                errorMessage={errors.userAddress?.neighborhood?.message}
              />

              <Input
                type="password"
                placeholder="Sua senha"
                label="Senha*"
                {...register("password")}
                errorMessage={errors.password?.message}
              />

              <Input
                type="password"
                placeholder="Repita sua senha"
                label="Confirmação de senha*"
                {...register("passwordConfirmation")}
                errorMessage={errors.passwordConfirmation?.message}
              />

              <S.Button type="submit">
                {isSubmitting ? (
                  <RingLoader size={20} color="#ffffff" />
                ) : (
                  "Cadastrar"
                )}
              </S.Button>
            </S.SignUpForm>

            <S.Link>Acesse a plataforma aqui</S.Link>
          </S.Content>
        </S.Splitter>
      </S.Card>
    </S.Container>
  );
}
