import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Header = () => {

    const navigate = useNavigate();

    return (
        <HeaderWrap>
            <HomeBtn onClick={()=>{
                navigate('/');
            }}>HOME</HomeBtn>
            <SignLogin>                 
                <SignBtn onClick={()=>{
                    navigate('/signup');
                }}>회원가입</SignBtn>
                <LoginBtn onClick={()=>{
                    navigate('/login'); 
                }}>로그인</LoginBtn>
            </SignLogin>
        </HeaderWrap>
    )
};

const HeaderWrap = Styled.header`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #0D47A1;
    position: absolute;
    

`;

const SignLogin = Styled.div`    
    display: flex;
    margin-left: 1000px;

`;


const HomeBtn = Styled.div`
    width: 100px;
    height: 50px;           
    border-radius: 10px;
    margin-top: 10px;
    margin-right: 500px;
    margin-left: 50px;    
    background-color: #1E88E5;
    border-color: #1E88E5;
    color: white;
    font-size: 20px;
    border-shadow: 5px 0px 0px 0px gray;
    font-family: 'Donoun-Medium';
    padding: 20px 0px 0px 0px;
    
`;

const SignBtn = Styled.div`
    width: 100px;
    height: 50px;  
    margin-right: 20px;
    margin-top: 10px;
    border-radius: 10px; 
    padding-top: 30px;    
    background-color: #1E88E5;
    border-color: #1E88E5;
    color: white;
    font-size: 20px;
    
    border-shadow: 5px 0px 0px 0px gray;
    font-family: 'Donoun-Medium';
    

`;

const LoginBtn = Styled.div`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
    padding-top: 30px;
    background-color: #1E88E5;
    border-color: #1E88E5;
    color: white;
    font-size: 20px;
    border-shadow: 5px 0px 0px 0px gray;
    font-family: 'Donoun-Medium';
`;


export default Header;