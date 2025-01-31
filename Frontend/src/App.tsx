import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import AppTheme from "./theme/AppTheme";
import SideMenu from "./components/SideMenu";
import AppNavbar from "./components/AppNavbar";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";

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
      <AppTheme>
        <Box sx={{ display: "flex" }}>
          <SideMenu />
          <CssBaseline enableColorScheme />
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
            <Header />
            <AppNavbar />
            <AppRoutes />
          </Box>
        </Box>
      </AppTheme>
    </BrowserRouter>
  );
}