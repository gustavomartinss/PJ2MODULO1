import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  overflow-y: hidden;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 568px;
  max-height: 90vh;
  padding: 33px;
  background: #ffffff;
  box-shadow: rgb(0 0 0 / 56%) 0px 5px 30px;
  border-radius: 5px;
  transform: translateY(20px);
  transition: transform 0.2s ease-in 0s, opacity 0.2s ease-in 0s;
  overflow-y: auto;
  text-align: left;
  cursor: default;

  @media (max-width: 768px) {
    min-height: 100vh;
    transform: translateY(0px);
    padding: 24px;
    border-radius: 0;
  }
`;

export const Header = styled.div`
  text-align: center;
`;

export const DeviceName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1.33em;
  color: green;
`;

export const Body = styled.div`
  margin-top: 8px;
  position: relative;
  padding: 32px 0;
  display: flex;
  justify-content: center;

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0px;
    background-color: #c1c1c1c1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
  gap: 2rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 10px;
  right: 10px;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: rgb(135, 134, 139);
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  :hover {
    filter: brightness(1.1);
    color: rgb(255, 255, 255);
  }
`;

export const AbortButton = styled(ReactRouterLink)`
  color: #2e4052;
  cursor: pointer;
  font-size: 0.825rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 3rem;

  :hover {
    filter: brightness(1.2);
    transition: 300ms;
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #00a335;
  color: #ffffff;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 150px;
  border: none;
  cursor: pointer;
  transition: 300ms;
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  :disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }
`;

export const AmbientDeviceForm = styled.form`
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 45px;
  padding: 0 1.5rem;
  border-radius: 0.75rem;
  outline: none;
  border: 1px solid #c1c1c1;
  margin-bottom: 1rem;
  margin-top: .5rem;
`;

export const Label = styled.label`
  color: #00863f;
  font-size: 0.875rem;
`;
