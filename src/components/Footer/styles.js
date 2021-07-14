import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: theme.palette.primary.black,
    height: "100%",
    padding: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
    height: "100%",
    // marginTop: theme.spacing(3),
    padding: theme.spacing(5),
    backgroundColor: "#000000",
    color: "#fff",
  },
  grow2: {
    flexGrow: 1,
    height: "100%",
    // marginTop: theme.spacing(3),
    padding: theme.spacing(5),
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    justifySelf: "center",
    display: "flex",
    textDecoration: "none",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  footerName: {
    color: "#fff",
    fontSize: "1em",
  },
  ctaButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    // padding: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    color: "#ffffff",
    borderColor: "#000000",
    backgroundColor: "#000000",
  },
  footerContainer: {
    backgroundColor: "#000000",
  },
  link: {
    textDecoration: "none",
  },
}));
