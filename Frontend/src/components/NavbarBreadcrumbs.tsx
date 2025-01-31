import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useLocation } from 'react-router-dom';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

const paths: { [key: string]: string } = { 
 '/' : 'Home',
 '/dashboard' : 'Dashboard',
 '/friends' : 'Friends'
}

const getName = (pathname: string) => {
  return paths[pathname as keyof typeof paths] || 'Unknown';
}

export default function NavbarBreadcrumbs() {
  const location = useLocation();

  console.log('location', location)
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      <Typography variant="body1">{getName(location.pathname)} </Typography>
      {/* <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
        Home
      </Typography> */}
    </StyledBreadcrumbs>
  );
}
