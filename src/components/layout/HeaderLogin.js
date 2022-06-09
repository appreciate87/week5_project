import React from "react";
import Styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../shared/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";

const HeaderLogin = () => {

    const user = useSelector(state => state.users.name);

    console.log(user);


    const navigate = useNavigate();


    return(
        <div>
            <HeaderWrap>
                <HomeBtn onClick={()=>{
                    navigate('/');
                }}>HOME</HomeBtn>
                <Img></Img>
                <ImgNickWrap>
                    <Nick>{user}</Nick>
                </ImgNickWrap>
                <SignLogin>                 
                    <SignBtn>알림</SignBtn>
                    <LoginBtn onClick={()=>{
                        signOut(auth);
                        navigate('/');
                    }}>로그아웃</LoginBtn>
                </SignLogin>
            </HeaderWrap>
        </div>
    )
}


const HeaderWrap = Styled.header`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #0D47A1;
    position: absolute;

`;

const SignLogin = Styled.div`    
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

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

const ImgNickWrap = Styled.div`
    display: flex;
    margin-top: 10px;
`;

const Img = Styled.div`
    width: 80px;
    height: 80px; 
    margin-top: 10px;
    border-radius: 80px;
    margin-left: 800px;
    background-color: #1E88E5;
    color: White;
    
`;

const Nick = Styled.div`
    font-family: 'Donoun-Medium';
    font-size: 20px;
    margin-top: 30px;
    margin-left: 60px;
    margin-right: 20px;
    color: white;
    
    
`;

const SignBtn = Styled.div`
    width: 100px;
    height: 50px;  
    margin-right: 20px;
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
    padding-top: 30px;
    background-color: #1E88E5;
    border-color: #1E88E5;
    color: white;
    font-size: 20px;
    
    border-shadow: 5px 0px 0px 0px gray;
    font-family: 'Donoun-Medium';
`;
export default HeaderLogin;