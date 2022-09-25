import styled from "styled-components";
import { opacify } from "polished";
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 80%;
  max-width: 980px;
  background: #ffffff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  padding: 2.25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const Heading = styled.h1`
  text-align: center;
  color: #00a335;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 100%;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: #00a335;
  color: #ffffff;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 250px;
  border: none;
  cursor: pointer;
  transition: 300ms;
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover:not([disabled]) {
    filter: brightness(1.2);
    transition: 300ms;
  }

  :disabled {
    cursor: not-allowed;
    color: ${opacify(0.8, "#00A335")};
  }
`;

export const Link = styled(ReactRouterLink)`
    color: #2E4052;
    cursor: pointer;
    text-align: center;
    font-size: .825rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 1rem;
    text-decoration: none;

    :hover {
        filter: brightness(1.2);
        transition: 300ms;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-direction: row-reverse;
    column-gap: 2rem;
`
