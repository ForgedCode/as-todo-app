import { createGlobalStyle } from "styled-components";
import { color, v, t, b } from "./variables";
import add from "../media/icons/add.svg";
import complete from "../media/icons/complete.svg";
import goBack from "../media/icons/return.svg";
import trash from "../media/icons/trashcan.svg";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    body {
        background: ${color.blue};
        color: ${color.yellow};
        font-size: 1.6rem;
        /* font-family: 'Bebas Neue', cursive; */
        font-family: 'Josefin Sans', sans-serif;
        overflow-x: hidden;
    }


    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    p, li {
        color: #fff;
        font-size: 2rem;
    }

    input, button {
        padding: ${v.smallDist} ${v.mediumDist};
        font-family: 'Josefin Sans', sans-serif;
        font-size: 2.3rem;
        outline: none;
        border: none;
    }

    input {
        width: 70%;

        @media ${b.medium} {
            width: 30%;
        }
    }

    

    button {
        background: ${color.yellow};
        font-family: 'Bebas Neue', cursive;
        cursor: pointer;
        transition: ${t.fastSp};
        letter-spacing: 0.2rem;
        position: relative;
        overflow: hidden;

        &::after {
                content: url("${add}");
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: -100%;
                background: ${color.yellow};
                transition: ${t.fastSp};
            }

            &:hover::after {
                left: 0;
            }

        &.delete-btn {
            background: #d36363;
            color: #fff;

            &::after {
                content: url("${trash}");
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: -100%;
                background: #d36363;
                transition: ${t.fastSp};
            }

            &:hover::after {
                left: 0;
            }
        }

        &.complete-btn {
            background: #33dd9c;

            &::after {
                content: url("${complete}");
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: -100%;
                background: #33dd9c;
                transition: ${t.fastSp};
            }

            &:hover::after {
                left: 0;
            }
        }
        
        &.uncomplete-btn {
            background: ${color.orange};
            color: #fff;

            &::after {
                content: url("${goBack}");
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: -100%;
                background: ${color.orange};
                transition: ${t.fastSp};
            }

            &:hover::after {
                left: 0;
            }
        }
    }

   
`;
