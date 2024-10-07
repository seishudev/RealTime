import { useNavigate, Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { accountAuth, authWithGoogle } from '../../../shared/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
  email: z.string().email(),
  password: z.string().min(6, { message: 'Must be at least 6 characters' })
});

type FormFields = z.infer<typeof schema>;

export const AuthForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    await accountAuth(data, navigate);
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
            <GoogleIcon onClick={() => authWithGoogle(navigate)} />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...register('email')}
              margin='normal'
              fullWidth
              label='Email Address'
              autoComplete='email'
              autoFocus
            />
            {errors.email && (
              <span className='error'>{errors.email.message}</span>
            )}
            <TextField
              {...register('password')}
              margin='normal'
              fullWidth
              label='Password'
              type='password'
              autoComplete='current-password'
            />
            {errors.password && (
              <span className='error'>{errors.password.message}</span>
            )}
            <Button
              disabled={isSubmitting}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to='/signup'>Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
