import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 120px;
  background-color: #282c34;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    padding-bottom: 12px;
  }

  @media (min-width: 601px) {
    height: 100%;
  }
`;

export const SidebarForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
`;

export const SidebarSearch = styled.div`
  position: relative;
  margin-left: 9px;

  @media (min-width: 601px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const SidebarSearchInput = styled.input`
  width: 80%;
  padding: 10px 5px 10px 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

export const SidebarSearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #333;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SidebarSelectors = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  @media (min-width: 601px) {
    width: 100%;
  }
`;

export const SidebarCitys = styled.button`
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #21a1f1;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #1b3b6f;
  }
`;

