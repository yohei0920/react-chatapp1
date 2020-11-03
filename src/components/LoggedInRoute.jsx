import React, {useContext} from "react"
import {Route, Redirect} from "react-router-dom"
import {AuthContext} from "../context/AuthService"

// ログイン状態を調べてログインしていればRoomへ、ログインしていなければLoginへ遷移

const LoggedInRoute = ({component: Component, ...otherProps}) => {
	// { exact: true, path: "/" }
	const user = useContext(AuthContext);

	return (
		// userの有無で表示するコンポーネントを変えたい
		<Route {...otherProps} render={() => user ? <Component/> : <Redirect to="/login" />} />
	)
}

export default LoggedInRoute;

// <Redirect to="/login" />
// http://localhost:3000/login にURLが変更される

// <Redirect to="/hello" />
// http://localhost:3000/hello