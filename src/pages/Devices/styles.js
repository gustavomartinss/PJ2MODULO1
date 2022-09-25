import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
`;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  padding: 2.25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const CardSkeleton = styled(Skeleton)`
  width: 80%;
  max-width: 350px;
  height: 400px;
  border-radius: 1rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;

export const DeviceImg = styled.img`
  width: 100%;
  max-width: 200px;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  padding-bottom: 1rem;
`;

export const DeviceTitle = styled.h3`
  color: black;
  font-size: 1rem;
  text-align: center;
`;

export const AddDeviceButton = styled.button`
  padding: 1rem;
  background-color: #03AA4D;
  color: #ffffff;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: 300ms;
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  :hover {
    filter: brightness(1.2);
    transition: 300ms;
  }
`;

export const DevicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  padding-top: 2.5rem;
  color: #50788a;
  padding-bottom: 2rem;
`;
