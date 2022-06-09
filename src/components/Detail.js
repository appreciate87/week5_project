import React from "react";
import Styled from "styled-components";
import { storage } from "./shared/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Detail = () => {

    const file_link_ref = React.useRef(null);


    const uploadFB = async (e) => {

        
        console.log(e.target.files);
        const uploded_file = await uploadBytes(
            ref(storage, `images/${e.target.files[0].name}`),
            e.target.files[0]
            );

            console.log(uploded_file);

            const file_url = await getDownloadURL(uploded_file.ref);
            console.log (file_url);
            file_link_ref.current = { url: file_url };
        };
    return (
    <Wrap>
        <DetailWrap>
            <CntWrap>
                <Circle></Circle>
                <Nick>닉네임</Nick>
                <Time>2022-06-07 01:45:35</Time>
            </CntWrap>
            <ContentWrap>
                <Content>
                    <Guel>게시글</Guel>
                </Content>
                <Img type="file" onChange={uploadFB} />
            </ContentWrap>
        </DetailWrap>
        <CommentBtnWrap>
            <InputComment type="text" placeholder="댓글을 입력해주세요"/>
            <CommnetBtn>댓글달기</CommnetBtn>
        </CommentBtnWrap>
        <PostBox>
            <PostPre>여기에 댓글이 들어갑니다.</PostPre>
        </PostBox>
    </Wrap>
    )
}

const Wrap = Styled.div`
    display: row;
    margin: auto;
`;

const DetailWrap = Styled.div`
    background-color: White;
    width: 1200px;
    height: 600px; 
    margin: auto;   


`;

const CntWrap = Styled.div`
    display: flex;
`;

const Circle = Styled.div`
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-color: #64B5F6;
    margin-left: 800px;
    
`;

const Nick = Styled.p`
    font-family: 'Donoun-Medium';
    font-size: 20px;
    margin-left: 15px;
`;

const Time = Styled.p`
    font-family: 'Donoun-Medium';
    fone-size: 20px;
    margin-left: 15px;
    margin-top: 20px;
`;

const ContentWrap = Styled.div`
    display: flex;
    margin: 30px auto;
`;

const Content = Styled.p`
    font-family: 'Donoun-Medium';
    margin-left: 250px;
    margin-top: 50px;
`;

const Guel = Styled.p`
    font-family: 'Donoun-Medium';
    font-size: 20px;
    margin-top: 20px;
`;

const Img = Styled.input`
    margin-left: 400px;
    margin-top: 70px;
`;

const CommentBtnWrap = Styled.div`
    margin-top: 20px;
`;

const InputComment = Styled.input`
    font-family: 'Donoun-Medium';
    width: 800px;
    height: 40px;
`;

const CommnetBtn = Styled.button`
    font-family: 'Donoun-Medium';
    width: 200px;
    height: 40px;
    background-color: #64B5F6;
    border-color: #64B5F6;
    margin-left: 20px;
    color: white;
    font-size: 20px;
`;


const PostBox = Styled.div`
    border: 1px solid #888;
    border-radius: 15px;  
    font-family: 'Donoun-Medium';
    width: 1000px;
    height: 200px;
    margin: 30px auto;
`;

const PostPre = Styled.pre`
    font-family: 'Donoun-Medium';
    font-size: 20px;
`;
export default Detail;