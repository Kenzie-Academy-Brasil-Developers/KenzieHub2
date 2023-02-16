import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;


}

body{
    background-color: var(--black);
    font-family: 'Inter', sans-serif;
}

:root{
   --color-primary: #FF577F;

   --white: #fff;
   --black: #000;

   --grey-0: #F8F9FA;
   --grey-1: #868E96;
   --grey-2: #343B41;
   --grey-3: #212529;
   --grey-4: #121214; 

   --color-hover-primary: #FF427F;


}

button{
    cursor: pointer;
    border: 0;
    background: none;
}

ul, ol, li {
    list-style: none;
}


.returnPage{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--grey-0);
    background-color: var(--grey-3);
    width: 80px;
    height: 32px;
    border-radius: 4px;
    font-size: 14px;


  }









`;
