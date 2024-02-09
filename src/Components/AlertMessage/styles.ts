import styled from "styled-components";

export const Modal = styled.div`
  width: 408px;
  height: 255px;
  color: #1d1d1d;
  background-color: #df86860a;
  border-radius: 8px;
  border: 1px;
  border-style: solid;
  border-color: #df8686;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  text-align: center;
  color: #1d1d1d;
  margin-top: 30px;
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  text-align: center;
  color: #747474;
  margin-top: 30px;
`;

export const ImageBox = styled.div`
  flex-direction: row;
  justify-content: center;
  display: flex;
  margin-top:15px;
  margin-bottom:20px;
`;


export const RescheduleButton = styled.button<{}>`
  padding-left: 3%;
  padding-right: 3%;
  margin-left: 1%;

  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  color: #ffffff;
  border-radius: 30px;

  height: 42px;
  cursor: pointer;
  background-color: #e40f0f;
  text-align: center;
`;
