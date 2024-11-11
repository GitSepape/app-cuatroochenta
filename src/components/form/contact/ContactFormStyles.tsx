import styled from "styled-components";

export const PopContactContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  max-width: 100%;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;

export const ContactFormPop = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
`;

export const ContactInput = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 12px 0;
  padding-left: 12px;
`;

export const ContactButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ContactClosePop = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ContactError = styled.p`
  color: #ff4d4f;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;