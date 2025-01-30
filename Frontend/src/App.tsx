import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { Grid2 as Grid, TextField } from '@mui/material';
import SistemAPI from './api/SistemAPI';
import UserCard from './components/userCard';
import { User } from './models/post.interface';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}



const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    SistemAPI.get('/allusers')
      .then(({ data }) => {
        setUsers(data)
        console.log('Users data', data)
      }
      )
      .catch((error) => console.error('Erro ao carregar usuários:', error));
  }, [])

  return (
    <Grid>
      {users.map((p: User) => {
        return (
          <UserCard user={p} />
        )
      })}
    </Grid>

  )
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example in aaaab
        </Typography>
        <TextField name='teste' label='test' />
        <ProTip />
        <Copyright />
        <UsersPage />
      </Box>
    </Container>
  );
}
