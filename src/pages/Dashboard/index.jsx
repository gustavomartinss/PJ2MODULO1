import * as S from "./styles";
import { IoWaterOutline, IoPowerSharp } from "react-icons/io5";
import { FiWind } from "react-icons/fi";
import { RiMapPinLine, RiCalendarLine } from "react-icons/ri";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { MyDeviceDetails } from "./components/MyDeviceDetails";

export function Dashboard() {
  const [weatherNow, setWeatherNow] = useState(null);
  const [myDevices, setMyDevices] = useState([]);
  const [myFilteredDevices, setMyFilteredDevices] = useState([]);
  const [locals, setLocals] = useState([]);
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    function getMyDevices() {
      api
        .get(`/userDevices/user/${user._id}`)
        .then((response) => {
          const myDevicesData = response.data;
          const locals = myDevicesData.map((myDevice) => myDevice.local);
          const seen = new Set();

          const availableLocals = locals.filter((local) => {
            const isDuplicated = seen.has(local._id);
            seen.add(local._id);

            return !isDuplicated;
          });

          setLocals(availableLocals);
          setMyDevices(myDevicesData);
          setMyFilteredDevices(myDevicesData);
        })
        .catch((error) => console.log(error.response));
    }

    user && getMyDevices();
  }, [user]);

  async function handleTurnOnOffDevice(device) {
    const updatedMyDevices = myDevices.map((myDevice) => {
      if (myDevice._id === device._id)
        return { ...myDevice, is_on: !myDevice.is_on };
      return myDevice;
    });

    const updatedMyFilteredDevices = myFilteredDevices.map((myDevice) => {
      if (myDevice._id === device._id)
        return { ...myDevice, is_on: !myDevice.is_on };
      return myDevice;
    });

    setMyDevices(updatedMyDevices);
    setMyFilteredDevices(updatedMyFilteredDevices);

    await api.put(`/userDevices/${device._id}`, {
      is_on: !device.is_on,
    });
  }

  const city = user?.userAddress?.city;

  useEffect(() => {
    // code
    async function getWeather() {
      await axios
        .get(
          `${import.meta.env.VITE_APP_API_OPEN_WEATHER}q=${
            user?.city || city
          }&units=metric&appid=${
            import.meta.env.VITE_APP_OPEN_WEATHER_KEY
          }&lang=pt_br`
        )
        .then(({ data: weather }) => {
          setWeatherNow(weather);
        });
    }
    user && getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function handleFilterByLocals(local) {
    const filteredDevices =
      local !== null
        ? myDevices.filter(
            (device) => local.description === device.local.description
          )
        : myDevices;
    setMyFilteredDevices(filteredDevices);
    setSelectedLocal(local);
  }

  function handleSelectDevice(device) {
    setSelectedDevice(device);
    setOpenModal(!openModal);
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dayFormated = new Intl.DateTimeFormat("pt-br", options).format(
    Date.now()
  );

  useEffect(() => {
    if (myFilteredDevices.length !== 0) {
      setIsLoading(!isLoading);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFilteredDevices.length]);

  return (
    <S.Container>
      <S.PageTitle>Dashboard</S.PageTitle>
      {weatherNow && (
        <S.Divider>
          <S.ProfileHeader to={"/profile"}>
            <S.UserPhoto
              src={user.photoUrl === '' ? "https://github.com/gustavomartinss/ConnectLab-DevInHouse/blob/main/public/defaultUser.png?raw=true" : user.photoUrl}
            />
            <S.UserInfo>
              <S.UserName>Olá, {user.fullName.split(" ")[0]}!</S.UserName>
              <S.UserContact>Bem-vindo(a) de volta</S.UserContact>
            </S.UserInfo>
          </S.ProfileHeader>
          <S.WeatherCard>
            <S.PrimaryContent>
              <S.WeatherCondition>
                {weatherNow.weather[0].description}
              </S.WeatherCondition>
              <S.Temperature>{Math.round(weatherNow.main.temp)}°</S.Temperature>
            </S.PrimaryContent>
            <S.WeatherImg
              src={`http://openweathermap.org/img/wn/${weatherNow.weather[0].icon}@2x.png`}
            />
            <S.SecondaryContent>
              <RiCalendarLine color="#fffff" />
              <S.ShowDay>{dayFormated}</S.ShowDay>
              <RiMapPinLine />
              <S.City>
                {user?.userAddress?.city}, {user?.userAddress?.state}
              </S.City>
            </S.SecondaryContent>
            <S.ThirdContent>
              <IoWaterOutline />
              <S.WeatherHumidity>{weatherNow.main.humidity}%</S.WeatherHumidity>
              <FiWind />
              <S.WeatherWindSpeed>
                {Math.round(weatherNow.wind.speed)}km/h
              </S.WeatherWindSpeed>
            </S.ThirdContent>
          </S.WeatherCard>
        </S.Divider>
      )}

      <S.FilterSection>
        <S.SecTitle>Filtre seus dispositivos por locais</S.SecTitle>
        <S.FilterList>
          <S.FilterButton
            isSelect={selectedLocal === null}
            onClick={() => handleFilterByLocals(null)}
          >
            todos
          </S.FilterButton>
          {locals.map((local) => (
            <S.FilterButton
              key={local._id}
              isSelect={selectedLocal?._id === local._id}
              onClick={() => handleFilterByLocals(local)}
            >
              {local.description}
            </S.FilterButton>
          ))}
        </S.FilterList>
      </S.FilterSection>

      <S.CardList>
        {myFilteredDevices.map((device) => (
          <S.Card key={device._id}>
            <S.DeviceImage
              src={device.device.photoUrl}
              onClick={() => handleSelectDevice(device)}
            />
            <S.DeviceData>
              <S.DeviceName onClick={() => handleSelectDevice(device)}>
                {device.device.name}
              </S.DeviceName>
              <S.DeviceFrom>
                <S.LocalName>{device.local.description}</S.LocalName>|
                <S.RoomName>{device.room}</S.RoomName>
              </S.DeviceFrom>
            </S.DeviceData>
            <S.SwitchPower
              isOn={device.is_on}
              onClick={() => handleTurnOnOffDevice(device)}
            >
              {!device.is_on ? (
                <IoPowerSharp size={24} color="white" />
              ) : (
                <IoPowerSharp size={24} color="#eeeeee" />
              )}
            </S.SwitchPower>
          </S.Card>
        ))}
      </S.CardList>
      {openModal && (
        <MyDeviceDetails
          isOpen={openModal}
          device={selectedDevice}
          setOpen={setOpenModal}
          myDevices={myDevices}
          myFilteredDevices={myFilteredDevices}
          setMyDevices={setMyDevices}
          setMyFilteredDevices={setMyFilteredDevices}
          setLocals={setLocals}
        />
      )}
    </S.Container>
  );
}
