import React from "react";
import {useSelector} from "react-redux";
import {
    Card,CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Col,
} from 'reactstrap';
import styled from "styled-components";
import Authorization from "../authorization/authorization";
import userIsLogin from "./is-login";

const StyledImg = styled(CardImg)`
  width: 300px;
  margin-bottom: 20px;
`;

const StyledImgFriends = styled(CardImg)`
  width: 110px;
  height: 110px;
`;
const StyledImgFriendsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCard = styled(Card)`
  flex-direction: row;
  border: none;
`;

const ProfileBlock = () => {
    let login = useSelector((state => state.reducerLogin.login));
    /*
     Функция userIsLogin описывается в файле is-login.js
     */
    return (
                userIsLogin(
                login,
                <ProfileInfo/>,
                <Authorization/>)
    )
}

const ProfileInfo = (props) => {
    return (

            <StyledCard>
                <Col>
                    <StyledImg
                        top width="100%"
                        src="https://yt3.ggpht.com/a/AATXAJxWPUE3wvW521-EiKHEzy7U4oG2D8sOXXLNbwTi=s900-c-k-c0xffffffff-no-rj-mo"
                        alt="Card image cap" />
                    <div>
                        <CardTitle tag="h3">Кот Барсик</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Возраст: 2 года. Пол: мужской</CardSubtitle>
                        <CardText>Всем привет! Меня зовут Барсик, я люблю вкусно покушать.
                            В свободное время с радостью царапаю мебель в квартире.
                            Буду рад новым знакомствам!
                        </CardText>
                    </div>
                </Col>
                <Col>
                    <CardBody>


                        <CardTitle tag="h5">Друзья</CardTitle>
                        <StyledImgFriendsContainer>
                            <div>
                                <StyledImgFriends
                                    top width="100%"
                                    src="https://sun9-44.userapi.com/5Gvopm_RmkOHREnE_NrIGe1JEaOlDJ7TKBxjVQ/s3jTkDPKyCc.jpg"
                                    alt="Card image cap" />
                                <CardTitle tag="h6">Тимошка</CardTitle>
                            </div>

                        <div>
                            <StyledImgFriends
                                top width="100%"
                                src="https://otdamtak.ru/pic/23838.jpg"
                                alt="Card image cap" />
                            <CardTitle tag="h6">Аркадий</CardTitle>
                        </div>
                        <div>
                            <StyledImgFriends
                                top width="100%"
                                src="http://myukr.com/images/photos/medium/759eb705a3e74e10e6ebe81ff05649f9.jpg"
                                alt="Card image cap" />
                            <CardTitle tag="h6">Василий</CardTitle>
                        </div>
                        <div>
                            <StyledImgFriends
                                top width="100%"
                                src="https://img1.goodfon.ru/original/1920x1200/2/fc/kot-barsik-pushistyy.jpg"
                                alt="Card image cap" />
                            <CardTitle tag="h6">Анфиса</CardTitle>
                        </div>
                        </StyledImgFriendsContainer>
                    </CardBody>

                </Col>

            </StyledCard>

    );
};

export default ProfileBlock;
