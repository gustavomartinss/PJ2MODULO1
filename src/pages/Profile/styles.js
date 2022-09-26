import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 580px;
  background: #ffffff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background: cover;
`;

export const ProfileHeader = styled.div`
  height: 40%;
  width: 100%;
  padding: 2.25rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProfileContent = styled.div`
  height: 60%;
  width: 100%;
  background-color: #50788a;
  padding: 2.25rem;
  border-radius: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const UserPhoto = styled.img`
  height: 150px;
  width: 150px;
  background-color: #ebeeee;
  border-radius: 100%;
  border: 1px solid #50788a;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  color: "#1b1b1b";
`;

export const UserName = styled.h1`
  color: #00a335;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const UserContact = styled.p`
  font-weight: 100;
  color: #1c1c1c;
`;

export const SubTitle = styled.h2`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 400;
`;

export const UserAdress = styled.p`
  color: #ffffff;
  font-weight: 300;
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: #00a335;
  color: #ffffff;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: 300ms;
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: bold;
  width: 100%;

  :hover {
    filter: brightness(1.05);
    transition: 300ms;
  }
`;

export const Link = styled(ReactRouterLink)`
  padding: 1rem;
  background-color: #00a335;
  color: #ffffff;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: 300ms;
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  text-decoration: none;

  :hover {
    filter: brightness(1.05);
    transition: 300ms;
  }
`;

export const QuitButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;