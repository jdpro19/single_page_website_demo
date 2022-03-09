import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #5c6bc0;
    color:#eeeeee;
    font-size: 12pt;
    padding: 5px 15px;
    border-radius: 18px;
    box-shadow: 0px 5px 8px gray;
    outline: 0;
    cursor:pointer;
    width:150px;
    height:40px;
    transition: ease 50ms;
    &:hover {
        background-color: #3f51b5;
    }
    

`

export default Button;