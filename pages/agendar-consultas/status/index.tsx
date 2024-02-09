import React from "react";

import AlertMessage from "../../../src/Components/AlertMessage";

import { AlertMessageProps } from "../../../src/Components/AlertMessage";

import { useRouter } from "next/router";

import { Container } from "./styles";

function Status() {
  const router = useRouter();

  const status = router.query.status as AlertMessageProps["status"];
  const title = router.query.title as string;
  const subtitle = router.query.subtitle as string;

  return (
    <Container>
      <AlertMessage alert={"Atenção"} message={subtitle} status={status} />
    </Container>
  );
}

export default Status;
