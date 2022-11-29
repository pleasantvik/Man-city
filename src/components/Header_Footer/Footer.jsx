import { CityLogo } from "../utils/utils";
import classes from "./css/footer.module.css";
export const Footer = () => {
  return (
    <footer className={classes.footer_bck_blue}>
      <div className={classes.footer_logo}>
        <CityLogo link={true} width="70px" height="70px" linkTo="/" />
      </div>
      <div className={classes.footer_discl}>
        Manchester city 2021. All right reserved
      </div>
    </footer>
  );
};
