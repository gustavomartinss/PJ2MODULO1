import * as S from "./styles";
import { FaConnectdevelop } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Switch from "react-switch";

export function Header({ isDarkModeOn, setIsDarkModeOn }) {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <FaConnectdevelop size={24} />
          Connect Lab
        </S.Logo>
        
        <S.SwitchContainer>
        {!isAuthenticated ? (
          <S.Button to="/">LOGIN</S.Button>
        ) : (
          <S.Nav>
            <S.NavLink
              $isActive={pathname.startsWith("/dashboard")}
              to={"/dashboard"}
            >
              Dashboard
            </S.NavLink>
            <S.NavLink
              $isActive={pathname.startsWith("/profile")}
              to={"/profile"}
            >
              Perfil
            </S.NavLink>
            <S.NavLink
              $isActive={pathname.startsWith("/devices")}
              to={"/devices"}
            >
              Dispositivos
            </S.NavLink>
          </S.Nav>
        )}
          <Switch
            onChange={() => setIsDarkModeOn(!isDarkModeOn)}
            checked={!isDarkModeOn}
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  paddingRight: 2,
                }}
              ></div>
            }
            checkedIcon={
              <svg
                viewBox="0 0 10 10"
                height="100%"
                width="100%"
                fill="transparent"
              >
                <circle r={3} cx={5} cy={5} />
              </svg>
            }
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 20,
                }}
              >
                🌙
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 18,
                }}
              >
                ☀️
              </div>
            }
          />
        </S.SwitchContainer>
      </S.Content>
    </S.Container>
  );
}

Header.propTypes = {
  isDarkModeOn: PropTypes.bool,
  setIsDarkModeOn: PropTypes.func,
};
