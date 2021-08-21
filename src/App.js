
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Home from "./components/Home";
import './components/Style.css';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    margin: 0,
    padding:0,
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#A7EFFA',
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <h1>Calculate the Tips!!!</h1>
      <Home />
    </div>
  );
}

export default App;
