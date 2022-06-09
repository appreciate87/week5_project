import React from "react";
import Styled from "styled-components";
import { auth } from "./shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./shared/firebase";
import { useNavigate } from "react-router-dom";




const SignUp = () => {

    const navigate = useNavigate();
    
    //값이 전부 말짱해! -> 벨리데이션
    // if (id_ref.current.value === ""){
    //     return false;
    // }

    const id_ref = React.useRef(null);
    const nickname_ref = React.useRef(null);
    const pw_ref = React.useRef(null);

    const signFB = async () => {
        const user = await createUserWithEmailAndPassword(
            auth, 
            id_ref.current.value,           
            pw_ref.current.value
            );
        console.log(user);
    
        const user_doc = await addDoc(collection(db, "users"),{
            user_id: user.user.email, 
            name : nickname_ref.current.value,
        });
        console.log(user_doc.id);
    };



    return (
        <Wrap>
            <Title>회원가입</Title>
            <Name>아이디(이메일)</Name>
            <Input type="text" placeholder="아이디를 입력해주세요(이메일형식으로 입력해주세요)😄" ref={id_ref}/>
            <Name>닉네임</Name>
            <Input type="text" placeholder="닉네임을 입력해주세요😄" ref={nickname_ref}/>
            <Name>비밀번호</Name>
            <Input type="text" placeholder="비밀번호를 입력해주세요😄" ref={pw_ref} />
            <Name>비밀번호 확인</Name>
            <Input type="text" placeholder="비밀번호를 다시한번 입력해주세요😄" ref={pw_ref}/>
            <Botton onClick={()=>{
                        signFB();
                        navigate('/');                    
                        }}>회원가입하기</Botton>                       
            
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
    margin-left: 30px;
    margin-top: 200px;
    

`;

const Name = Styled.p`
    font-family: 'Donoun-Medium';
    text-align: left;
    margin-left: 30px;
    font-size: 20px;
    font-weight: bold;
`;

const Input = Styled.input`
    font-family: 'Donoun-Medium';
    font-size: 20px;
    padding-left: 20px;
    margin-left: 30px;
    width: 60%;
    height: 40px;
    border-color: #64B5F6;
`;

const Botton = Styled.button`
    width: 600px;
    height: 100px;
    background-color: #64B5F6;
    border-color: #64B5F6;
    color: white;
    border-radius: 5px;
    margin-top: 40px;
    margin-left: 50px;
    padding: 10px 0px 10px 0px;
    font-size: 60px;
    border-shadow: 5px 0px 0px 0px gray;
    font-family: 'Donoun-Medium';
    
`;

export default SignUp;