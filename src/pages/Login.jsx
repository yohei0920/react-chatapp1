import React,{useState, useContext} from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import {auth} from "../firebase"
import {AuthContext} from "../context/AuthService"

import TextField from '@material-ui/core/TextField'; // default import
import Button from '@material-ui/core/Button'; // default import
import { makeStyles } from '@material-ui/core/styles'; // named import

const useStyles = makeStyles(() => ({
  root: {
    width: '350px',
    margin: '0 auto',
    marginTop: '50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    justifyContent: 'space-between',
  },
}));

// import React,{useState} from 'react';
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const classes = useStyles();
	const history = useHistory();
	const user = useContext(AuthContext)
	
	const handleSubmit = (e) => {
		e.preventDefault();
		// ログインする関数を実行
		auth.signInWithEmailAndPassword(email, password)
			.then((response)=>{
				console.log(response)
				//成功した時
				history.push("/")
			})
			.catch((error)=>{
				//失敗した時
				console.error("ログイン失敗", error)
			})
	}

	if(user) {
		return <Redirect to="/" />
	}

  return (
    <div className={classes.root}>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
					variant="outlined"
					label="E-mail"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
        <TextField
					variant="outlined"
					label="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
        <Button type="submit" variant="contained" color="secondary">
					ログイン
        </Button>
        <Link to="/signup">アカウントをお持ちでない方</Link>
      </form>
    </div>
  );
};

export default Login;