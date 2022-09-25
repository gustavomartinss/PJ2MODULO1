import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 80%;
    /* max-width: 980px; */
    background: #ffffff;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
    /* padding: 2.25rem; */
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    row-gap: 1rem;
    margin-top: 80px;
    margin-bottom: 80px;
`;

export const Splitter = styled.div`
    width: 50%;
`

export const Content = styled.div`
    padding: 2.25rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Banner = styled.div`
    height: 100%;
    background-image: url(https://images.unsplash.com/photo-1552321928-7edbac72205e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1rem 0 0 1rem;
`

export const Heading = styled.h1`
    text-align: center;
    color:  #00A335;
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
    row-gap: .5rem;
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
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        filter: brightness(1.2);
        transition: 300ms;
    }
`;

export const Link = styled.a`
    color: #2E4052;
    cursor: pointer;
    font-size: .825rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 1rem;
    

    :hover {
        filter: brightness(1.2);
        transition: 300ms;
    }
`;