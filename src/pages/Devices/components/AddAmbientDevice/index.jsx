import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import * as S from "./styles";
import api from "../../../../services/api";
import { Input } from "../../../../components/Input";
import { useAuth } from "../../../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

export function AddAmbientDevice({ isOpen, setOpen, device }) {
  const { user } = useAuth();

  const [fadeType, setFadeType] = useState(false);

  const [locals, setLocals] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setFadeType("fade-in");
      document.body.style.overflowY = "hidden";
    }
  }, [isOpen]);

  useEffect(() => {
    if (fadeType === "fade-out") {
      setTimeout(() => {
        setOpen();
        document.body.style.overflowY = "auto";
      }, 150);
    }
  }, [fadeType, setOpen]);

  function handleClose() {
    setFadeType("fade-out");
  }

  useEffect(() => {
    function getLocals() {
      api
        .get("/locals")
        .then((response) => {
          const localsData = response.data;

          setLocals(localsData);
        })
        .catch((error) => console.log(error));
    }

    if (locals.length === 0) getLocals();
  }, [locals]);

  const registerDeviceSchema = yup
    .object({
      local: yup.string().required("Preenchimento do nome é obrigatório"),
      room: yup.string().required("Preenchimento do e-mail é obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerDeviceSchema),
  });

  function handleRegisterDevice(values) {
    const { local, room } = values;

    api
      .post(`/userDevices`, {
        user: user._id,
        device: device._id,
        is_on: false,
        local,
        room,
      })
      .then(() => {
        toast.success("Dispositivo cadastrado com sucesso!");
        handleClose();
      })
      .catch((error) => {
        toast.error(error.response.data.error || "Ocorreu um erro!");
        handleClose();
      });
  }

  return (
    <S.Container className={`modal ${fadeType}`}>
      <S.Content>
        <S.Header>
          <S.DeviceName>{device?.name}</S.DeviceName>
          <S.CloseButton onClick={() => handleClose()} title="Cancelar">
            <FiX size={24} />
          </S.CloseButton>
        </S.Header>
        <S.Body>
          <S.AmbientDeviceForm onSubmit={handleSubmit(handleRegisterDevice)}>
            <S.Label>Local*</S.Label>
            <S.Select {...register("local")}>
              <option value="" hidden>
                Selecione o local...
              </option>
              {locals.map((local) => (
                <option key={local._id} value={local._id}>
                  {local.description}
                </option>
              ))}
            </S.Select>
            <Input
              placeholder="Insira o nome do seu ambiente"
              label="Ambiente*"
              {...register("room")}
            />
            <S.Wrapper>
              <S.AbortButton
                onClick={() => handleClose()}
                className="transparent"
              >
                CANCELAR
              </S.AbortButton>
              <S.SubmitButton type="submit">CONFIRMAR</S.SubmitButton>
            </S.Wrapper>
          </S.AmbientDeviceForm>
        </S.Body>
      </S.Content>
    </S.Container>
  );
}

AddAmbientDevice.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  device: PropTypes.object,
};