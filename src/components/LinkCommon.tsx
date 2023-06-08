import {
  Link,
  LinkBaseProps,
  LinkTypeMap,
  TypographyProps,
  useTheme
} from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkCommonProps extends LinkBaseProps {
  state?: any;
  external?: boolean;
  variant?: TypographyProps["variant"];
  underline?: LinkTypeMap["props"]["underline"];
  color?: LinkTypeMap["props"]["color"];
}

const LinkCommon: FC<LinkCommonProps> = ({
                                           href,
                                           variant,
                                           children,
                                           underline = "none",
                                           onClick,
                                           color,
                                           external = false,
                                           state = null
                                         }): JSX.Element => {
  const { palette } = useTheme();
  const target = external ? "_blank" : "_self";
  const routeTo = external ? Link : RouterLink;

  const styles = {
    link: {
      color: color ?? palette.common.white,
      textDecoration: "none",
      fontWeight: 600
    }
  };

  return (
    <Link
      to={href}
      href={href}
      state={state}
      underline={underline}
      variant={variant}
      component={routeTo}
      onClick={onClick}
      target={target}
      sx={styles.link}
      rel="noreferrer noopener"
      data-testid="link-common"
    >
      {children}
    </Link>
  );
};

export default LinkCommon;
