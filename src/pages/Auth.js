import React, { useState } from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";

const Auth = ({ setAuthorized }) => {
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === process.env.REACT_APP_PWD) setAuthorized(true);
  };

  return (
    <Base>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" value="Log" />
        </Form>
      </Wrapper>
    </Base>
  );
};

export default Auth;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 1em;
  width: 100%;
  ${up("lg")} {
    width: 80%;
    padding: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Label = styled.h2``;

const Input = styled.input`
  margin: 2rem 0;
`;

const Button = styled.input`
  width: 20%;
  margin: 0 auto;
`;
