import { Input } from "../../components/Input";
import * as S from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";
import axios from "axios";
import { delay } from "../../shared/utils/useDelay";
import { useNavigate } from "react-router-dom";

export function EditProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const updateUserValidationSchema = yup
    .object({
      fullName: yup.string().required("Preenchimento obrigatório"),
      email: yup
        .string()
        .email("E-mail inválido")
        .required("Preenchimento obrigatório"),
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

  useEffect(() => {
    // code
    if (user !== null) {
      setValue("fullName", user.fullName);
      setValue("email", user.email);
      setValue("photoUrl", user.photoUrl);
      setValue("phone", user.phone);
      setValue("zipCode", user.userAddress.zipCode);
      setValue("street", user.userAddress.street);
      setValue("state", user.userAddress.state);
      setValue("city", user.userAddress.city);
      setValue("complement", user.userAddress.complement);
      setValue("number", user.userAddress.number);
      setValue("neighborhood", user.userAddress.neighborhood);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function handleUpdateUser(values) {
    const {
      fullName,
      email,
      password,
      passwordConfirmation,
      photoUrl,
      phone,
      zipCode,
      street,
      state,
      city,
      complement,
      number,
      neighborhood,
    } = values;

    await delay(2000);

    api
      .put(`/users/${user._id}`, {
        fullName,
        email,
        photoUrl,
        phone,
        password,
        passwordConfirmation,
        userAddress: {
          zipCode,
          street,
          state,
          city,
          complement,
          number,
          neighborhood,
        },
      })
      .then(() => {
        toast.success("Usuário atualizado com sucesso!");
        navigate('/profile')
      })
      .catch((error) => {
        toast.error(error.response.data.error || "Ocorreu um erro!");
      });
  }

  return (
    <S.Container>
      <S.Card>
        <S.Heading>Meu Perfil</S.Heading>

        <S.SignUpForm onSubmit={handleSubmit(handleUpdateUser)}>
          <Input
            placeholder="Seu nome completo"
            label="Nome Completo*"
            {...register("fullName")}
            errorMessage={errors.fullName?.message}
          />

          <Input
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
            errorMessage={errors.street?.message}
          />

          <Input
            placeholder="Sua cidade"
            label="Cidade*"
            {...register("city")}
            errorMessage={errors.city?.message}
            disabled
          />

          <Input
            placeholder="Seu estado"
            label="Estado*"
            {...register("state")}
            errorMessage={errors.state?.message}
            disabled
          />

          <Input
            placeholder="Seu bairro"
            label="Bairro*"
            {...register("neighborhood")}
            errorMessage={errors.neighborhood?.message}
          />

          <Input
            placeholder="Seu número"
            label="Número*"
            {...register("number")}
            errorMessage={errors.number?.message}
          />

          <Input
            placeholder="Complemento do seu endereço"
            label="Complemento"
            {...register("complement")}
            errorMessage={errors.complement?.message}
          />

          <Input
            placeholder="Sua senha"
            label="Nova Senha ou Atual para confirmação*"
            {...register("password")}
            errorMessage={errors.password?.message}
            type={"password"}
          />

          <Input
            placeholder="Repita sua senha"
            label="Confirmação da nova senha ou Atual para confirmação*"
            {...register("passwordConfirmation")}
            errorMessage={errors.passwordConfirmation?.message}
            type={"password"}
          />

          <S.Wrapper>
            <S.Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <RingLoader size={20} color="#ffffff" />
              ) : (
                "Salvar"
              )}
            </S.Button>
            <S.Link to={"/profile"}>Cancelar</S.Link>
          </S.Wrapper>
        </S.SignUpForm>
      </S.Card>
    </S.Container>
  );
}
