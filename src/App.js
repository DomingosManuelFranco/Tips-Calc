
import { makeStyles } from "@material-ui/styles";
import Home from "./components/Home";
import './components/Style.css';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: '90vh',
    backgroundColor: '#A7EFFA',
  }
})

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h1>Calculate the Tips!!!</h1>
      <Home />
    </div>
  );
}

export default App;
