import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // height: "100vh",
    backgroundColor: "#000",
    flexGrow: 1,
    // padding: theme.spacing(2),
  },
  title: {
    color: "#fff",
    paddingTop: theme.spacing(3),
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),
  },
  box: {
    flexGrow: 1,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    justifySelf: "center",
    textAlign: "center",
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),
    // margin: theme.spacing(10),
  },
  productsSection: {
    marginTop: theme.spacing(10),
  },
}));
