import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "../../../Hoc/adminLayout.module.css";
import { logoutHandler } from "../../utils/utils";

export const AdminNav = () => {
  const links = [
    {
      title: "Matches",
      linkTo: "/admin_matches",
    },
    {
      title: "Players",
      linkTo: "/admin_players",
    },
  ];

  const renderItems = () => {
    return links.map((link) => (
      <Link to={link.linkTo} key={link.title}>
        <List>
          <ListItem button className={classes.admin_nav_link}>
            {link.title}
          </ListItem>
        </List>
      </Link>
    ));
  };
  return (
    <div>
      {renderItems()}
      <ListItem
        button
        className={classes.admin_nav_link}
        onClick={logoutHandler}
      >
        Log out
      </ListItem>
    </div>
  );
};
