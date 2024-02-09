import React from "react";

import { Head, Container, Path, PageTitle, Line } from "./styles";

export interface HeaderProps {
    title: string;
    line: string;
  }

 
function Header({
    title,
    line,
  }: HeaderProps) {
  return (
    <Head>
      <Container>
        <Path>Home {">"} {title}</Path>
        <PageTitle>{title}</PageTitle>
        <Line>A maior rede de tratamento pokémon.</Line>
      </Container>
    </Head>
  );
}

export default Header;
