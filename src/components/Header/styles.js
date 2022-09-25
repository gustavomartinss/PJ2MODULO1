import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: 80px;
  background: #00A65D;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const Logo = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
`;

export const Button = styled(Link)`
  background: #507888;
  padding: 1rem 2.5rem;
  border: none;

  font-size: 0.825rem;
  font-weight: 600;
  color: #fff;
  border-radius: 0.75rem;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)`
  padding: 0rem 1.5rem;
  font-size: 1.225rem;
  font-weight: 600;
  color: rgba(255,255,255,.5);
  text-decoration: none;
  transition: 300ms;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #00a335;

  :hover {
    transform: translateY(-.25rem);
    transition: 300ms;
  }

  ${({ $isActive }) =>
  $isActive &&
    css`
      color: #ffffff;
      border-bottom: 2px solid #ffffff;
      transition: 300ms;
    `}
`;

export const SwitchContainer =  styled.div`
  display: flex;
  align-items: center;
  column-gap: 3rem;
`;
