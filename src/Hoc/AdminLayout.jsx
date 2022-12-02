import { AdminNav } from "../components/Admin/nav/AdminNav";
import classes from "./adminLayout.module.css";
export const AdminLayout = (props) => {
  return (
    <div className={classes.admin_container}>
      <div className={`${classes.admin_left_nav}`}>
        <AdminNav />
      </div>
      <div className={classes.admin_right}>
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
};
