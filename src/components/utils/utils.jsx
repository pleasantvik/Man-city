import { Link } from "react-router-dom";

import mcityLogo from "../../Resources/images/logos/manchester_city_logo.png";
import utilsClasses from "./utils.module.css";

export const CityLogo = (props) => {
  const template = (
    <div
      className={utilsClasses.img_cover}
      style={{
        width: props.width,
        height: props.height,
        background: `url(${mcityLogo}) no-repeat`,
      }}
    ></div>
  );

  if (props.link) {
    return (
      <Link to={props.linkTo} className={utilsClasses.link_logo}>
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
