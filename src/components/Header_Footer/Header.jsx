import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { CityLogo } from "../utils/utils";
import classes from "./css/AppBar.module.css";
// import logo from '../../Resources/images/logos/manchester_city_logo.png'

export const Header = () => {
  return (
    <AppBar className={classes.appBar}>
      <Toolbar
        style={{ display: "flex" }}
        className={classes.appBar_header_logo}
      >
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <CityLogo link={true} linkTo="/" width="70px" height="70px" />
          </div>
        </div>
        <Link to="/the_team">
          <Button color="inherit">The Team</Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>
        <Link to="/dashboard">
          <Button color="inherit">Dashboard</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
