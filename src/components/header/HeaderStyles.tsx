import styled from 'styled-components';

interface LanguageButtonProps {
  selected: boolean;
};

export const TopBar = styled.header`
  background-color: #282c34;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const LanguageContent = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LanguageButtonsContent = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2px;
  margin-left: 8px;
`;

export const LanguageButtons = styled.button<LanguageButtonProps>`
  background-color: ${(props) => (props.selected ? '#21a1f1' : 'transparent')};
  color: ${(props) => (props.selected ? '#fff' : '#61dafb')};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #21a1f1;
    color: #fff;
  }
`;