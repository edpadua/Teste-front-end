import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: #ffffff;
  height: 104px;
`;

export const NavContainer = styled.div`
  display: flex;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 20px;
`;

export const NavbarLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  justify-content: flex-end;
`;

interface LogoProps {
    showtext: boolean;
}


export const Logo = styled.div<LogoProps>`
  width: ${(props) => (props.showtext ? '25%' : '65px')};
  height: ${(props) => (props.showtext ? '65px' : '65px')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  padding: 0.8rem;
  border-radius: 4rem;
  background-color: #e40f0f;
  transition: width 400ms;
  overflow: hidden;
  cursor: pointer;

  
  &:hover > #logo-text {
    display: block !important;
    opacity: 1 !important;
  }
`;

export const Text = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.2px;
`;

export const Option = styled.div<{ $active: boolean }>`
  border-radius: 30px;
  padding: 1rem 1.8rem;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  font-size: 14px;

  color: ${(props) => (props.$active ? "#FFFFFF" : "#000000")};
  text-decoration: none;
  white-space: nowrap;

  background-color: ${(props) => (props.$active ? "#E40F0F" : "#FFFFFF")};

  cursor: pointer;
`;
