import { forwardRef } from 'react';
import * as S from './styles';
import PropTypes from "prop-types"

const InputBase = ({ name, label, errorMessage = null, ...rest }, ref) => {
  return (
    <S.FormControl>
      {errorMessage !== null && <S.Error>{errorMessage}</S.Error>}
      <S.Input
        ref={ref}
        id={name}
        name={name}
        error={errorMessage !== null}
        {...rest}
      />
      <S.Label htmlFor={name}>{label}</S.Label>
    </S.FormControl>
  );
};

export const Input = forwardRef(InputBase);

InputBase.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string
};
