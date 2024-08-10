import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../main.tsx';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { message } from 'antd';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const schema = z.object({
  firstName: z.string().min(1, { message: 'Required field' }),
  lastName: z.string().min(1, { message: 'Required field' }),
  email: z.string().email(),
  password: z.string().min(6, { message: 'Must be at least 6 characters' })
});

type FormFields = z.infer<typeof schema>;

export const SignupForm = () => {
  const navigate = useNavigate();
  const { auth } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      message.success('Registration was successful');
      navigate('/', { replace: true });
    } catch (e) {
      message.error('A registration error has occurred');
      throw new Error(`A registration error has occurred: ${e.code}`);
    }
  };

  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      message.success('Registration was successful');
      navigate('/', { replace: true });
    } catch (e) {
      message.error('A registration error has occurred');
      throw new Error(`A registration error has occurred: ${e.code}`);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <GoogleIcon onClick={authWithGoogle} />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('firstName')}
                  autoComplete='given-name'
                  fullWidth
                  label='First Name'
                  autoFocus
                />
                {errors.firstName && (
                  <span className='error'>{errors.firstName.message}</span>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('lastName')}
                  fullWidth
                  label='Last Name'
                  autoComplete='family-name'
                />
                {errors.lastName && (
                  <span className='error'>{errors.lastName.message}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register('email')}
                  fullWidth
                  label='Email Address'
                  autoComplete='email'
                />
                {errors.email && (
                  <span className='error'>{errors.email.message}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register('password')}
                  fullWidth
                  label='Password'
                  type='password'
                  autoComplete='new-password'
                />
                {errors.password && (
                  <span className='error'>{errors.password.message}</span>
                )}
              </Grid>
            </Grid>
            <Button
              disabled={isSubmitting}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link to='/auth' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
