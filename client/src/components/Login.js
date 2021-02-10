import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Login() {
  const style = useStyles();
  return (
    <form className="login">
      <TextField label="Username"/>
      <TextField label="Password"/>
      <Button> Login </Button>
      <Button> Sign Up </Button>
      <Button> Forgot your password? </Button>
    </form>
  );
}

