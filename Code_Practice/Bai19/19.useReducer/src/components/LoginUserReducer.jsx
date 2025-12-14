//Step 1: import useReducer from react
import { useReducer } from 'react'

//Step 2: define initial state
const initialState = false;

//Step 3: define action
const LOGIN = 'login';
const LOGOUT = 'logout';

//Step 4: define reducer function (sẽ làm gì với từng action)
function reducer(state, action) {
    switch(action){
        case LOGIN:
            return true;
        case LOGOUT:
            return false;
        default:
            throw new Error("Action không hợp lệ");
    }
}

export default function LoginUserReducer() {
    
    const [isLoggedIn, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h2>{isLoggedIn ? "Chào mừng bạn đến với app!" : "Chưa đăng nhập"}</h2>
            <button onClick={() => dispatch(LOGIN)}>Đăng nhập</button>
            <button onClick={() => dispatch(LOGOUT)}>Đăng xuất</button>
        </>
    );
}