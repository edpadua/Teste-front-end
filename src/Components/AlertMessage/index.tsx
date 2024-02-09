import React from "react";

import { Modal, Title, Text, ImageBox, RescheduleButton } from "./styles";

import Router from "next/router";

import Image from "next/image";

export interface AlertMessageProps {
  alert: string;
  message: string;
  status?: "success" | "error";
}

function AlertMessage({
  alert,
  message,
  status = "success",
}: AlertMessageProps) {
  return (
    <Modal>
      {status == "success" ? (
        <>
          <Title>Consulta Agendada</Title>
          <ImageBox>
            <Image src={"/check.svg"} alt={"Check"} width={45} height={45} />
          </ImageBox>
          <Text>{message}</Text>
          
        </>
      ) : (
        <>
          <Title>Houve um problema no agendamento</Title>
          <ImageBox>
            <Image src={"/warning.svg"} alt={"Check"} width={45} height={45} />
          </ImageBox>
          <Text>{message}</Text>
          
        </>
      )}

    
      <ImageBox>
        <RescheduleButton onClick={() => Router.push("/agendar-consultas")}>
          Fazer Novo Agendamento
        </RescheduleButton>
      </ImageBox>
    </Modal>
  );
}

export default AlertMessage;
