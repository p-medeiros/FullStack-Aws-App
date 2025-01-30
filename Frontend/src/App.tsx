import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { TextField } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';

import SistemAPI from './api/SistemAPI';
import { User } from './models/post.interface';
import UserCard from './components/MyComponents/userCard';

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";


// function Copyright() {
//   return (
//     <Typography
//       variant="body2"
//       align="center"
//       sx={{
//         color: 'text.secondary',
//       }}
//     >
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }



// const UsersPage = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     SistemAPI.get('/allusers')
//       .then(({ data }) => {
//         setUsers(data)
//         console.log('Users data', data)
//       }
//       )
//       .catch((error) => console.error('Erro ao carregar usuários:', error));
//   }, [])

//   return (
//     <Grid>
//       {users.map((p: User) => { return <UserCard user={p} /> })}
//     </Grid>

//   )
// }

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
