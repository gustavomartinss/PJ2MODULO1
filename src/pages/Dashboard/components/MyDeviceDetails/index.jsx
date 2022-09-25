import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import * as S from "./styles";
import api from "../../../../services/api";
import PropTypes from "prop-types";
import { Input } from "../../../../components/Input";
import { toast } from "react-toastify";

export function MyDeviceDetails({
  isOpen,
  setOpen,
  device,
  myDevices,
  myFilteredDevices,
  setMyDevices,
  setMyFilteredDevices,
  setLocals,
}) {
  const [fadeType, setFadeType] = useState(false);

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

  function handleDeleteDevice(id) {
    api
      .delete(`/userDevices/${id}`)
      .then(() => {
        const myDevicesWithoutExcluded = myDevices.filter(
          (eachDevice) => eachDevice._id !== id
        );
        const myFilteredDevicesWithoutExcluded = myFilteredDevices.filter(
          (eachDevice) => eachDevice._id !== id
        );

        setMyDevices(myDevicesWithoutExcluded);
        setMyFilteredDevices(myFilteredDevicesWithoutExcluded);

        const locals = myDevicesWithoutExcluded.map(
          (myDeviceLocal) => myDeviceLocal.local
        );
        const seen = new Set();

        const availableLocals = locals.filter((local) => {
          const isDuplicated = seen.has(local._id);
          seen.add(local._id);

          return !isDuplicated;
        });

        setLocals(availableLocals);

        handleClose();
        toast.success("Excluído com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <S.Container className={`modal ${fadeType}`}>
      <S.Content>
        <S.Header>
          <S.DeviceName>{device?.device?.name}</S.DeviceName>
          <S.CloseButton onClick={() => handleClose()} title="Cancelar">
            <FiX size={24} />
          </S.CloseButton>
        </S.Header>
        <S.Body>
          <S.DeviceImage src={device?.device?.photoUrl} />
          <S.DeviceInfo>
            <Input
              label={"Local:"}
              value={device?.local?.description}
              disabled
            />
            <Input label={"Ambiente:"} value={device?.room} disabled />
            <Input
              label={"Status:"}
              value={device?.is_on ? "Ligado" : "Desligado"}
              disabled
            />
            <Input
              label={"Tipo do dispositivo:"}
              value={device?.device?.type}
              disabled
            />
            <Input
              label={"Fabricante:"}
              value={device?.device?.madeBy}
              disabled
            />
            <Input
              label={"Intensidade do Sinal:"}
              value={device?.device?.info?.signal}
              disabled
            />
            <Input
              label={"Endereço IP:"}
              value={device?.device?.info?.ip_address}
              disabled
            />
            <Input
              label={"Endereço MAC:"}
              value={device?.device?.info?.mac_address}
              disabled
            />
          </S.DeviceInfo>
          <S.Wrapper>
            <S.AbortButton
              onClick={() => handleClose()}
              className="transparent"
            >
              CANCELAR
            </S.AbortButton>
            <S.DeleteButton onClick={() => handleDeleteDevice(device?._id)}>
              Excluir
            </S.DeleteButton>
          </S.Wrapper>
        </S.Body>
      </S.Content>
    </S.Container>
  );
}

MyDeviceDetails.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  device: PropTypes.object,
  myDevices: PropTypes.array,
  myFilteredDevices: PropTypes.array,
  setMyDevices: PropTypes.func,
  setMyFilteredDevices: PropTypes.func,
  setLocals: PropTypes.func,
};
