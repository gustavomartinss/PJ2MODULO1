import * as S from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../components/Input';
import { toast } from "react-toastify";
import { useEffect } from 'react';

export function Login() {
  const { isAuthenticated } = useAuth();
  const signInValidationSchema = yup
    .object({
      email: yup
        .string()
        .email('Deve ser um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(8, 'A senha deve conter no mínimo 8 caracteres')
        .required('A senha é obrigatória'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });
  const { signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return navigate('/dashboard');
  }, []);

  async function handleSignIn({ email, password }) {
    const userCredentials = {
      email,
      password,
    };

    signIn(userCredentials)
      .then(() => {
        navigate('/dashboard');
        toast.success('Logado com sucesso!');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <S.Container>
      <S.Card>
        <S.Heading>Acessar</S.Heading>

        <S.SignInForm onSubmit={handleSubmit(handleSignIn)}>
          <Input
            placeholder="Seu e-mail"
            id="email"
            name="email"
            errorMessage={errors.email?.message}
            {...register('email')}
          />

          <Input
            placeholder="Sua senha" 
            id="password"
            name="password"
            type="password"
            errorMessage={errors.password?.message}
            {...register('password')}
          />

          <S.Button>Acessar plataforma</S.Button>
        </S.SignInForm>

        <S.Link to={'/register'}>Cadastre-se aqui</S.Link>
      </S.Card>
    </S.Container>
  );
}
