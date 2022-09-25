import * as S from './styles'
import api from '../../services/api'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useEffect, useState } from 'react'
import { delay } from '../../shared/utils/useDelay'
import { AddAmbientDevice } from './components/AddAmbientDevice'
import { Input } from '../../components/Input'
import debounce from 'debounce'

export function Devices () {
  const [devices, setDevices] = useState([])
  const [searchTerm, setSearcheTerm] = useState('')
  const [isFetchingDevices, setIsFetchingDevices] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState(null)

  const hasDevices = devices.length > 0;

  useEffect(() => {
    async function getDevices() {
      setIsFetchingDevices(true);

      await delay(500);

      api
        .get("/devices")
        .then((response) => {
          const devicesData = response.data;

          setDevices(devicesData);
        })
        .catch((error) => console.log(error.response))
        .finally(() => setIsFetchingDevices(false));
    }
    getDevices();
  }, []);

  const handleSelectDevice = (device) => {
    setSelectedDevice(device);
    setOpenModal(!openModal);
  };

  const skeleton = Array.from(Array(8).keys());

  if (isFetchingDevices) {
    return (
      <S.DevicesList>
        {skeleton.map((key) => (
          <SkeletonTheme key={key} baseColor="#e0e4e1" highlightColor="#f1f1f1">
            <S.CardSkeleton width={350} height={400} />
          </SkeletonTheme>
        ))}
      </S.DevicesList>
    );
  }

  return (
    <S.Container>
      <S.SectionTitle>Dispositivos</S.SectionTitle>
      <Input
        label={"Pesquise por um dispositivo:"}
        placeholder={"Insira o nome do dispositivo"}
        onChange={debounce((e) => setSearcheTerm(e.target.value), 1000)}
      />
      <S.DevicesList>
        {hasDevices &&
          devices
            .filter((dev) => {  
              if (searchTerm === "") {
                return dev;
              } else if (
                dev.name
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(
                    searchTerm
                      .toLocaleLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                  )
              ) {
                return dev;
              }
              return false
            })
            .map((device) => (
              <S.Card key={device?._id}>
                <S.DeviceImg src={device?.photoUrl} />
                <S.DeviceTitle>{device?.name}</S.DeviceTitle>
                <S.AddDeviceButton onClick={() => handleSelectDevice(device)}>
                  Adicionar
                </S.AddDeviceButton>
              </S.Card>
            ))}
        {openModal && (
          <AddAmbientDevice
            isOpen={openModal}
            setOpen={() => setOpenModal(false)}
            device={selectedDevice}
          />
        )}
      </S.DevicesList>
    </S.Container>
  );
}
