import React, {useState, useEffect, createContext} from "react"
import {auth} from "../firebase"

// コンテキストの作成
const AuthContext = createContext()

// useEffect(関数, [依存変数/state])
// 依存変数が変更されるたびに関数が実行される

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);

	// 副作用を扱うためのhooks
	// 関数のタイミング調整係
	// 今回は画面描写後に一度だけ実行
	useEffect(() => {
		// ユーザーのログイン状態の変更を監視 => ログイン状態が切り替わるたびにcallbak関数にuser情報が渡されて実行される + 最初の1回
		// 引数のuserはログイン状態ならユーザーのオブジェクト、ログアウト状態ならnullが入る
		auth.onAuthStateChanged((user) => {
			console.log(user)
			setUser(user)
		})
	},[])

	return (
		<AuthContext.Provider value={ user }>
			{children}
		</AuthContext.Provider>
	)
}

export {
	AuthContext,
	AuthProvider
}