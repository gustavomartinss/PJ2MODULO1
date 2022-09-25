import { Link as ReactRouterLink } from 'react-router-dom'

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 100%;
    max-width: 460px;
    background: #ffffff;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
    padding: 2.25rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const Heading = styled.h1`
    text-align: center;
    color:  #00A335;
    font-size: 1.25rem;
`;

export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
`;

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
`;

export const Label = styled.label`
    color: #00863F;
    font-size: .825rem;
`;

export const Input = styled.input`
    height: 45px;
    padding: 0 1.5rem;
    border-radius: .75rem;
    border: 1px solid #c1c1c1;
    outline: none;

    :focus {
        border: 1px solid #00863F;
        transition: 300ms ease-in-out;
    }
`;

export const Button = styled.button`
    padding: 1rem;
    background-color: #00A335;
    color: #ffffff;
    border-radius: .75rem;
    border: none;
    cursor: pointer;
    transition: 300ms;
    text-transform: uppercase;
    font-size: .825rem;
    font-weight: bold;

    :hover {
        filter: brightness(1.2);
        transition: 300ms;
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