import styled from "styled-components";

export const Card = styled.div`
  height: 60%;
  width: 80%;
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CardCity = styled.article`
  background-image: url('https://images.pexels.com/photos/20624356/pexels-photo-20624356/free-photo-of-ciudad-punto-de-referencia-noche-edificios.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 30%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  padding-left: 12px;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding-left: 0px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px;
  }
`;

export const CardNameContainer = styled.aside`
  margin-top: 30px;

  @media (max-width: 600px) {
    margin-left: 12px;
    margin-top: 12px;
  }
`;

export const CardNameCity = styled.h2`
  margin: 0;
  font-size: 24px;
  color: white;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const CardTempContainer = styled.aside`

`;

export const CardTempText = styled.h3`
  margin: 0;
  font-size: 42px;
  color: white;

  @media (max-width: 600px) {
    font-size: 24px;
    margin-left: 12px;
    margin-bottom: 12px;
  }
`;

export const CardDescription = styled.article`
  width: 60%;
  background-image: url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  padding: 12px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    gap: 0px;
  }
`;

export const CardDate = styled.h5`
  margin: 0;
  font-size: 18px;
  color: white;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const CardText = styled.h5`
  margin: 0;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 6px;
  color: #282c34;

  @media (max-width: 600px) {
    font-size: 12px;
    margin-left: 12px;
  }
`;