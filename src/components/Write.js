import React from "react";
import Styled from "styled-components";



const Write = () => {

    return (
        <Wrap>
            <Title>게시글 작성</Title>
            <ImageWrap>
                <ImageInput type="file" img="img" alt="text" src=".src/image/image1.jpg"/>
                <Btn>사진 올리기</Btn>
            </ImageWrap>
            <CommentWrap>
                <CommentTitle>게시물 내용</CommentTitle>
                <Comment type="textarea" cols="20" rows="5" placeholder="게시글을 작성해주세요"/>
            </CommentWrap>
            <CommentBtn>게시글 작성</CommentBtn>
        </Wrap>
    )
}


const Wrap = Styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const ImageWrap = Styled.div`
    background-color: white;
    width: 700px;
    height: 100px;    
    border-radius: 20px;
    margin: 50px auto;   

`;

const Title = Styled.h1`
    font-family: 'Donoun-Medium';
    font-size: 40px;
    
`;

const ImageInput = Styled.input`
    width: 300px;
    height: 100px;
    font-family: 'Donoun-Medium';
`;

const Btn = Styled.button`
    font-family: 'Donoun-Medium';
    width: 120px;
    height: 70px;
    margin-top: 20px;
    margin-left: 80px;
    background-color: #1E88E5;
    border-color: #1E88E5;
    color: white;
    font-size: 20px;
    border-radius: 10px;
`;


const CommentWrap = Styled.div`    
    display: column;    
`;

const CommentTitle = Styled.p`
    font-family: 'Donoun-Medium';
    font-size: 30px;
    
`;

const Comment = Styled.input`
    font-family: 'Donoun-Medium';
    width: 500px;
    height: 100%;
    font-size: 20px;
    padding: 16px 16px 16px 16px;
    
`;

const CommentBtn = Styled.button`
    font-family: 'Donoun-Medium';
    width: 120px;
    height: 70px;
    background-color: #1E88E5;
    border-color: #1E88E5;
    color: white;
    border-radius: 10px;
    font-size: 20px;
   margin: 20px auto;
`;

export default Write;