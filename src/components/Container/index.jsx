import * as S from "./styles";
import PropTypes from "prop-types";

export function Container({children}) {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}
Container.propTypes = {
    children: PropTypes.node,
  };