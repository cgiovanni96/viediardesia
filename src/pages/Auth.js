import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Auth = ({ setAuthorized }) => {
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === process.env.REACT_APP_PWD) setAuthorized(true);
  };

  return (
    <Layout>
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
    </Layout>
  );
};

export default Auth;

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
