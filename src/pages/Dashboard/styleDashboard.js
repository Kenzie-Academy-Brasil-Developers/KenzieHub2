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
  }

  header {
    width: 100%;
    height: auto;
    padding: 34px 18px;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    gap: 18px;
    background-color: var(--grey-4);
  }

  div {
    display: flex;
    justify-content: space-around;
  }

  h3 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 18px;
  }

  p {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12px;
  }

  main {
    margin-top: 40px;
  }
`;

export const DivRenderTech = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    width: 780px;
    height: auto;
    border-radius: 4px;
    padding: 20px 20px;
    gap: 20px;
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
  }

  button {
    width: 80px;
    height: 30px;
    background-color: none;
    color: var(--grey-0);
  }

  p {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12.182px;
  }

  h2 {
    color: var(--grey-1);
  }
`;

export const DivInitialPag = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-3);
  width: 780px;
  height: 230px;
  border-radius: 4px;

  p {
    font-size: 16px;
  }
`;

export const BtnCreateTech = styled.button`
  font-size: 20px;
`;
