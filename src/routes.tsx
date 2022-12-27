import {CHAT_PAGE, LOGIN_PAGE} from "./utils/constants";
import {Login} from "./components/Login";
import {Chat} from "./components/Chat";

export const privateRoutes = [
    {
        path: CHAT_PAGE,
        Component: <Chat />
    }
]

export const publicRoutes = [
    {
        path: LOGIN_PAGE,
        Component: <Login />
    }
]