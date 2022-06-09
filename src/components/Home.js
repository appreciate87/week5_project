import React from "react";
import Styled from "styled-components";
import { useSelector , useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const Home = () => {

    const user = useSelector(state => state.users.name);
    const comment = useSelector(state => state.users.comment);

    console.log(comment);

    console.log(user);

 

    const navigate = useNavigate();

    return (
    <>        
        <Wrap>
            <UserName>오늘하루는 어땠나요?😆</UserName>         
            <Container>
                <Cards>                    
                    <Comment>{comment}</Comment>
                    <h3>여기에 카드가 들어갑니다.!</h3>
                </Cards>
            </Container>
                <ButtonWrap>
                    <Button onClick={()=>{
                            navigate('/write');
                        }}>게시글 <br/>작성하기</Button>
                </ButtonWrap>                
            
        </Wrap>
    </>
    )
};


const Wrap = Styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const Container = Styled.div`
  
  

`;

const UserName = Styled.p`
    font-family: 'Donoun-Medium';
    font-size: 30px;
    color: #64B5F6;
    font-weight: bold;
    text-align: center;
    padding-left: 30px;
    margin-top: 100px;
`;


const Cards = Styled.div`
    margin: 5px auto;
    width: 800px;
    height: 500px;
    border: 1px solid gray;
    border-radius: 10px;
    
`;



const Comment = Styled.p`
    font-family: 'Donoun-Medium';
    font-size: 30px;
    color: #64B5F6;
    font-weight: bold;
    text-align: center;
    padding-left: 30px;
`;


const ButtonWrap = Styled.div`
    margin:auto;
    margin-left: 50px;
`;
const Button = Styled.div`
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background-color: #64B5F6;
    border-color: #64B5F6;
    color: white;    
    font-size: 40px;
    padding: 30px;   
    font-family: 'Donoun-Medium';
    display: column;
    
    
    
    
    
`;

export default Home;