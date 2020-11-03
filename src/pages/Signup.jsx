import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles(() => ({
  root: {
    width: "350px",
    margin: "0 auto",
    marginTop: "50px",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "300px",
  },
}));

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = UseStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // 成功するとthenの中の関数が実行される
        user
          .updateProfile({
            // ユーザーの名前を登録
            displayName: username,
          })
          .then(() => {
            // "/"に遷移
            history.push('/');
          });
      })
      .catch((error) => {
        //失敗するとcatchの中の関数が実行される
        console.log('作成失敗', error);
      });
  };

  return (
    <div className={classes.root}>
      <h1>signup Page</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
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
        <TextField
          variant="outlined"
          label="User Name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          サインアップ
        </Button>
        <Link to="/login">すでにアカウントをお持ちの方</Link>
      </form>
    </div>
  );
};

export default Signup;
