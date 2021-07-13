import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    // fontFamily: "Nunito",
    textDecoration: "none",
    // backgroundColor: "#000000",
  },
  copywriteTitle: {
    display: "flex",
    marginBottom: theme.spacing(0),
    color: "#ffffff",
  },
  copywriteDescription: {
    display: "flex",
    marginBottom: theme.spacing(5),
    color: "#ffffff",
  },
  ctaWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    // margin: theme.spacing(5),
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
}));
