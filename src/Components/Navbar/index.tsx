import { useEffect, useState } from "react";

import Link from "next/link";

import Image from "next/image";

import { Nav, NavContainer, NavbarLinks, Logo, Text, Option } from "./styles";

function Navbar() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    if (showText) {
      setShowText(false);
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo showText={showText} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Image
            src={"/images/white-pokeball.svg"}
            alt={"white pokeball"}
            width={36}
            height={36}
          />
          {showText && <Text>Centro Pokémon</Text>}
          
        </Logo>
        <NavbarLinks>
          <Link href="/sobre">
            <Option $active={false}>Quem Somos</Option>
          </Link>
          <Link href="/agendar-consultas">
            <Option $active={true}>Agendar Consulta</Option>
          </Link>
        </NavbarLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
