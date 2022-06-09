import React from "react";
import Styled from "styled-components";
import { auth } from "./shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth"
import { getDocs, where, query, collection } from "firebase/firestore"; 
import { db } from "./shared/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const id_ref = React.useRef(null);
    const pw_ref = React.useRef(null);

    const loginFB = async () => {
        console.log(id_ref.current.value, pw_ref.current.value);
        const user = await signInWithEmailAndPassword(
            auth, 
            id_ref.current.value, 
            pw_ref.current.value
        );
        console.log(user);

        const user_docs = await getDocs(query(
            collection(db, "users"), where("user_id" , "==", user.user.email))
            );
            
            // 유저정보 가져오기
            user_docs.forEach(u => {
                console.log(u.data());
            })
            
        };



    return (
        <Wrap>
            <Title>로그인</Title>
            <Name>아이디(이메일)</Name>
            <IdInput type="text" placeholder="아이디를 입력해주세요(이메일형식으로 입력해주세요)😄" ref={id_ref}/>
            <Name>비밀번호</Name>
            <PwInput type="password" placeholder="비밀번호를 입력해주세요😄" ref={pw_ref}/>
            <Botton onClick={()=>{
            loginFB();
            navigate('/');
            }}>로그인하기</Botton>
        </Wrap>
    )
};


const Wrap = Styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;


const Title = Styled.h1`
    font-family: 'Donoun-Medium';
    text-align: left;
    margin-left: 790px;
    margin-top: 200px;
    
    

`;

const Name = Styled.p`
    font-family: 'Donoun-Medium';
    text-align: left;
    margin: 10px;
    font-size: 20px;
    font-weight: bold;    
    margin-left: 790px;
`;

const IdInput = Styled.input`
    font-family: 'Donoun-Medium';
    font-size: 20px;
    width: 800px;
    height: 40px;
    border-color: #64B5F6;
    margin-left: 790px;
    
    
`;

const PwInput = Styled.input`
    font-family: 'Donoun-Medium';
    font-size: 20px;
    width: 800px;
    height: 40px;
    border-color: #64B5F6;
    margin-left: 790px;
    
`;

const Botton = Styled.button`
    width: 810px;
    height: 100px;
    background-color: #64B5F6;
    border-color: #64B5F6;
    color: white;
    border-radius: 5px;
    font-size: 60px;
    border-shadow: 5px 0px 0px 0px gray;
    font-family: 'Donoun-Medium';
    display: flex;
    margin-top: 50px;
    padding-top: 20px;
    margin-left: 780px;
    padding-left: 300px;
    
`;

export default Login;