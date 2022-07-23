import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import routes from "../routes";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(2),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(4),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  const linkEls = routes.map(([to, , title], idx) => (
    <Link key={idx} to={to} className={classes.link}>
      {title}
    </Link>
  ));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        <div className={classes.navlinks}>{linkEls}</div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
