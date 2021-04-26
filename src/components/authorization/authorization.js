import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Card, Alert } from "reactstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setUserName, setPassword, setCount } from "../../actions/action_login";
import userIsLogin from "../profile/is-login";
import verificationOfAuthorization from "./verification-authorization";
import Authorized from "./authorized";

const StyledCard = styled(Card)`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
`;

const StyledAlert = styled(Alert)`
  margin-top: 15px;
`;

const user = {
  userName: localStorage.getItem("login"),
  password: localStorage.getItem("password"),
  login: localStorage.getItem("isLogin"),
};

const Authorization = () => {
  const [errorMesg, setErrorMsg] = useState(false);
  let login = useSelector((state) => state.reducerLogin.login);
  let count = useSelector((state) => state.reducerLogin.count);

  /*
   Функция userIsLogin описывается в файле is-login.js
   */
  return userIsLogin(
    login,
    <Authorized />,
    <AuthorizationForm
      count={count}
      err={errorMesg}
      setErrorMsg={setErrorMsg}
    />
  );
};

const AuthorizationForm = ({ count, err, setErrorMsg }) => {
  let userName = useSelector((state) => state.reducerLogin.userName);
  let password = useSelector((state) => state.reducerLogin.password);

  const dispatch = useDispatch();
  function setZero(count) {
    if (count !== 0 && count < 10) {
      return "0" + count;
    } else return count;
  }

  return (
    <StyledCard>
      <Label>
        <h5>Войдите в личный кабинет</h5>
      </Label>

      <Form
        onBlur={(e) => {
          if (e.target.name === "email") {
            dispatch(setUserName(e.target.value));
          } else if (e.target.name === "password") {
            dispatch(setPassword(e.target.value));
          } else return;
        }}
      >
        <Label>Попыток входа: {setZero(count)}</Label>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
          {err ? (
            <StyledAlert color="danger">
              Неправильный логин или пароль
            </StyledAlert>
          ) : (
            ""
          )}
        </FormGroup>

        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(setCount(++count));
            verificationOfAuthorization(
              userName,
              password,
              dispatch,
              user,
              setErrorMsg
            );
          }}
        >
          Войти
        </Button>
      </Form>
    </StyledCard>
  );
};

export default Authorization;
