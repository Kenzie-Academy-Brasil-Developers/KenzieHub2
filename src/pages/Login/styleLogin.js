import styled, { css } from "styled-components";

export const DivLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 48px;
  width: 296px;
  height: 402.69px;
  gap: 20px;

  form {
    display: flex;
    flex-direction: column;
    width: 295.83px;
    height: 709.96px;
    background-color: var(--grey-3);
    padding: 34px 18px;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    gap: 18px;
    margin-top: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: justify;
    gap: 10px;
    color: red;
    font-size: 10px;
  }

  label {
    color: var(--grey-0);
    font-size: 10px;
  }

  h2 {
    color: var(--grey-0);
    font-size: 15px;
    font-weight: 700;
  }
  button {
    width: 259.9px;
    height: 38.5px;
    background-color: var(--color-primary);
    color: var(--grey-0);
    border-radius: 4px;
  }

  .linkToRegister {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 259.9px;
    height: 38.5px;
    background-color: var(--grey-1);
    color: var(--grey-0);
    border-radius: 4px;
    text-decoration: none;
  }

  p {
    font-weight: 600;
    font-size: 9.62602px;
    color: var(--grey-1);
  }

  input {
    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;
    padding: 0px 12.9865px;
    gap: 8.12px;

    width: 263.79px;
    height: 38.38px;
  }
  img {
    width: 100px;
    height: 17px;
  }
`;
