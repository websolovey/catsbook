import React, { useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  NavLink,
  Spinner,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { newsLoaded } from "../../actions/action_news";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin-bottom: 30px;
`;

const NewsCard = (props) => {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.reducerNews.news);
  const isLoading = useSelector((state) => state.reducerNews.loading);


  //Получаем новости
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ru&apiKey=404640add6d74f6dbacc509cc7702c76"
    )
      .then((res) => res.json())
      .then((data) => dispatch(newsLoaded(data.articles)));
  }, [dispatch]);

  const items = news.map(
    ({ publishedAt, urlToImage, title, author, description, url }, index) => {
       return (
        <Row>
          <StyledCard key={`${publishedAt}-${index}`}>
            <CardImg top width="100%" src={urlToImage} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {author}
              </CardSubtitle>
              <CardText>{description}</CardText>
              <NavLink href={url} target="_blank">
                Подробнее
              </NavLink>
            </CardBody>
          </StyledCard>
        </Row>
      );
    }
  );
  return <Row>{isLoading ? <Spinner /> : <Col >{items}</Col>}</Row>;
};

export default NewsCard;


//API key 404640add6d74f6dbacc509cc7702c76
//https://newsapi.org/v2/top-headlines?country=ru&apiKey=404640add6d74f6dbacc509cc7702c76
