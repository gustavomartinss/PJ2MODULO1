import styled, { css } from 'styled-components';

export const FormControl = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 0.5rem;
`;

export const Label = styled.label`
  color: #00863f;
  font-size: 0.875rem;
`;

export const Error = styled.strong`
  color: #de4841;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const Input = styled.input`
  height: 45px;
  padding: 0 1.5rem;
  border-radius: 0.75rem;
  outline: none;
  border: 1px solid ${(props) => (props.error ? '#de4841' : '#c1c1c1')};

  ${({ error }) =>
    error &&
    css`
      + ${Label} {
        color: #de4841;
      }
    `}

  :focus {
    border: 1px solid ${(props) => (props.error ? '#de4841' : '#00863F')};
    transition: 300ms ease-in-out;
  }
`;
