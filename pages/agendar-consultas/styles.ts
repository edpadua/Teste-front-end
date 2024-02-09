import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

`;

export const Form = styled.form`
  width: 45%;
  padding: 20px;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #d5d5d5;
  font-size: 14px;
  border-radius: 8px;
  line-height: 16.94px;
  color: #747474;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #d5d5d5;
  font-size: 14px;
  border-radius: 8px;
  line-height: 16.94px;
  color: #747474;
`;

export const LabelLeft = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #1d1d1d;
  width: 16%;
`;

export const Label = styled.label`
  display: block;
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #1d1d1d;
`;

export const SubForm = styled.div`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.4rem;
  margin-bottom: 4rem;
`;

export const TitleSubForm = styled.h3`
  font-size: 12px;
  font-weight: 700;
  color: #1d1d1d;
  padding: 1%;
`;

export const TitleForm = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 29.05px;
  color: #1d1d1d;
  text-align: center;
`;

export const TextSubForm = styled.h5`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.52px;
  color: #747474;

  padding: 1%;
`;

export const Field = styled.div`
  width: 50%;
  padding: 1%;
`;

export const FieldInline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  gap: 2%;
`;

export const FormLine = styled.div`
  display: flex;
`;

export const ButtonAdd = styled.button<{}>`
  width: 45%;
  padding-left: 3%;
  padding-right: 3%;
  margin-left: 1%;
  margin-bottom: 30px;
  margin-top: 30px;

  font-size: 12px;
  font-weight: 700;
  line-height: 14.52px;
  color: #1d1d1d;
  border-radius: 30px;
  border: 1px solid #1d1d1d;
  height: 42px;
  cursor: pointer;
  background-color: #ffffff;
  text-align: center;

  &::after {
    content: "+";
    display: block;
    position: absolute;
    bottom: 0.5rem;
    right: 0.8rem;
  }
`;

export const ScheduleInfo = styled.div`
  padding: 1%;
`;

export const InfoRow = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  color: #747474;
  margin-bottom: 5px;
`;

export const Note = styled.p`
  padding: 1%;
  font-size: 8px;
  font-weight: 400;
  line-height: 9.68px;
  color: #747474;
  margin-top: 10px;
`;

export const Confimation = styled.div`
  margin-top: 40px;
  padding: 1%;
  display: flex;
`;

export const Total = styled.div`
  width: 50%;
`;

export const ScheduleConfirm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const TotalText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 29.05px;
  color: #1d1d1d;
  margin-top: 10px;
`;

export const ScheduleButton = styled.button<{}>`
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
