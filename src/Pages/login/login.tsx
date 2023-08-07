import React, { useState } from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PitchersLogo } from '../../Assets/index.ts';
import { LoginData } from './login.types.ts';
import { StyledForm } from './login.styled.tsx';
import Layout from '../../Shared/layout/layout.styles.ts';

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
    <Layout layoutdirection="row">
      <StyledForm>
        <CardHeader avatar={<PitchersLogo size="large" />} />
        <CardContent>
          <TextField
            variant="filled"
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
