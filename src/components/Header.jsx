import { Container, Grid } from '@mui/material';
import './header.css';
import MenuBurger from './MenuBurger';
import logo from './logo.png';

function Header() {
  return (
    <Container className="Header" maxWidth="xl">
      <nav>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <img className="logo" alt="logo" src={logo} />
          </Grid>
          <Grid item xs={8} textAlign="center">
            <h1>Le Forum</h1>
          </Grid>
          <Grid item xs={2}>
            <MenuBurger />
          </Grid>
        </Grid>
      </nav>
    </Container>
  );
}

export default Header;
