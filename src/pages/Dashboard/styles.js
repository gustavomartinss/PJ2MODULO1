import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Divider = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  align-items: center;
  width: 100%;
  column-gap: 2rem;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const WeatherCard = styled.div`
  width: 100%;
  background: #7fd3f7; /* #507888 */
  padding: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  height: 100%;
  grid-column: 2/4;
`;

export const PrimaryContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.15rem;
  align-items: center;
  justify-content: center;
`;

export const SecondaryContent = styled.div`
  padding-left: 1.5rem;
  display: grid;
  grid-template-columns: 16px 1fr;
  row-gap: 1rem;
  align-items: center;
  color: #ffffff;
`;

export const ThirdContent = styled.div`
  padding-left: 1.5rem;
  display: grid;
  grid-template-columns: 16px 1fr;
  row-gap: 1rem;
  align-items: center;
  color: #ffffff;
`;

export const WeatherImg = styled.img`
  border-right: 0.1rem solid #fff;
`;

export const ShowDay = styled.p`
  font-size: 1rem;
  font-weight: 100;
  color: #fff;
  padding-left: 0.5rem;
  display: block;
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const Temperature = styled.h1`
  color: #ffffff;
  font-size: 2.85rem;
  font-weight: 600;
`;

export const City = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 100;
  padding-left: 0.5rem;
`;

export const WeatherCondition = styled.p`
  color: #fff;
  font-weight: 300;
  display: block;

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const WeatherHumidity = styled.p`
  color: #fff;
  font-weight: 300;
  column-gap: 0.5rem;
  padding-left: 0.5rem;
`;

export const WeatherWindSpeed = styled.p`
  color: #fff;
  font-weight: 300;
  padding-left: 0.5rem;
`;

export const SwitchPower = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isOn }) => (isOn ? "#00a335" : "#8b979f")};
  cursor: pointer;
  transition: all 300ms;
  border: 2px solid #ffffff;
  outline: 2px solid ${({ isOn }) => (isOn ? "#00a335" : "#8b979f")};
  margin-left: auto;

  :hover {
    filter: ${({ isOn }) => isOn && "brightness(1.15)"};
  }
`;
export const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  padding: 2.25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.75rem;
  height: min-content;
`;

export const DeviceImage = styled.img`
  width: 100%;
  max-width: 100px;
  cursor: pointer;
  transition: 300ms;

  :hover {
    transition: 300ms;
    transform: scale(1.03);
  }
`;

export const DeviceName = styled.h3`
  color: #1c1c1c;
  cursor: pointer;
  transition: 300ms;
  max-width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  :hover {
    transition: 300ms;
    color: #00a335;
  }
`;

export const DeviceFrom = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const LocalName = styled.span`
  font-weight: 100;
  color: #1c1c1c;
`;

export const RoomName = styled.span`
  font-weight: 100;
  color: #1c1c1c;
  max-width: 80px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const DeviceData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;

export const FilterList = styled.div`
  width: 100%;
  display: flex;
  column-gap: 0.75rem;
  padding-top: 1rem;
`;

export const FilterSection = styled.section`
  padding-top: 2rem;
`;

export const SecTitle = styled.span`
  font-size: 1.15rem;
  color: #50788a;
  font-weight: 600;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: ${({ isSelect }) => (isSelect ? "#00a335" : "transparent")};
  color: ${({ isSelect }) => (isSelect ? "#FFFFFF" : "#8b979f")};
  border-radius: 0.5rem;
  border: 1px ${({ isSelect }) => (isSelect ? "#00a335" : "#8b979f")} solid;
  cursor: pointer;
  transition: 300ms;
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #00a335;
    color: ${({ isSelect }) => (!isSelect ? "#FFFFFF" : "")};
    border: 1px ${({ isSelect }) => (!isSelect ? "#00a335" : "#8b979f")} solid;
  }
`;

export const ProfileHeader = styled(ReactRouterLink)`
  width: 100%;
  padding: 2.25rem;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1rem;
  justify-content: space-evenly;
  height: 100%;
  cursor: pointer;
  transition: 300ms;
  text-decoration: none;

  :hover {
    transform: translateY(-0.25rem);
    transition: 300ms;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserPhoto = styled.img`
  height: 120px;
  width: 120px;
  background-color: #ebeeee;
  border-radius: 100%;
  border: 1px solid #50788a;
  object-fit: fill;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const UserName = styled.h1`
  color: #00a335;
  font-size: 1.5rem;
`;

export const UserContact = styled.p`
  font-weight: 100;
  color: #50788a;
`;

export const PageTitle = styled.h2`
  font-size: 1.75rem; 
  padding-top: 2.5rem;
  color: #50788a;
`
export const MissingDeviceMessage = styled.span`
  color: #50788a;
`;

export const LinkAddDevice = styled(ReactRouterLink)`
  font-size: .75rem;
  color: #00a335;
  text-transform: uppercase;
`