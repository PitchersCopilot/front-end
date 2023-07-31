import React, { useState } from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Shared/layout/layout.tsx';
import Logo from '../../Assets/logos/logo.tsx';
import { LoginData } from './login.types.ts';
import { StyledForm } from './login.components.tsx';

export default function Login() {
  const [loginData, setLoginData] = useState<Partial<LoginData>>();
  const navigation = useNavigate();

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigation('/');
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputId = event.target.id;
    const newValue = event.target.value;
    setLoginData({ ...loginData, [inputId]: newValue });
  };

  return (
    <Layout>
      <StyledForm>
        <CardHeader avatar={<Logo size="medium" />} />
        <CardContent>
          <TextField
            variant="standard"
            id="user"
            type="email"
            label="Email"
            onChange={inputChange}
          />
          <TextField
            variant="filled"
            id="password"
            type="password"
            label="Password"
            onChange={inputChange}
            size="medium"
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            size="large"
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardActions>
      </StyledForm>
    </Layout>
  );
}
