import styled, { css } from "styled-components";

export const DashboardFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 48px;
  width: 100%;
  height: 800px;
  max-height: 100%;
  max-width: 100%;
  background-color: var(--grey-4);

  nav {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    padding: 15px 15px;
    background-color: var(--grey-4);
    color: var(--grey-1);
    max-width: 100%;

  }

  header {
    width: 100%;
    height: auto;
    padding: 34px 18px;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    gap: 18px;
    background-color: var(--grey-4);
    max-width: 100%;

  }

  div {
    display: flex;
    justify-content: space-around;
    max-width: 100%;

  }

  h3 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 18px;
    max-width: 100%;

  }

  p {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12px;
    max-width: 100%;

  }

  main {
    margin-top: 40px;
    max-width: 100%;

  }
`;

export const DivRenderTech = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;


  ul {
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    width: 780px;
    height: auto;
    border-radius: 4px;
    padding: 20px 20px;
    gap: 20px;
    max-width: 100%;

  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 732px;
    height: 69px;
    background-color: var(--grey-4);
    max-width: 100%;

  }

  button {
    width: 80px;
    height: 30px;
    background-color: none;
    color: var(--grey-0);
    max-width: 100%;

  }

  p {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12.182px;
    max-width: 100%;

  }

  h2 {
    color: var(--grey-1);
    max-width: 100%;

  }
`;

export const DivInitialPag = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-3);
  width: 780px;
  height: 230px;
  border-radius: 4px;
  max-width: 100%;


  p {
    font-size: 16px;
    max-width: 100%;

  }
`;

export const BtnCreateTech = styled.button`
  font-size: 20px;
  max-width: 100%;

`;
