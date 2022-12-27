import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {Error} from "./Error";
import {Root} from "./Root";
import {Chat} from "./Chat";
import {Login} from "./Login";
import {useAuthState} from "react-firebase-hooks/auth";
import {useContext} from "react";
import {Context} from "../main";

export const AppRoutes = () => {
    const {auth} = useContext(Context);
   const [user] = useAuthState(auth);

    console.log(user)

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<Root/>}>
                {user
                    ? [...privateRoutes.map(route => <Route path={route.path} element={route.Component}/>), <Route path={'*'} element={ <Chat />} />]
                    : [...publicRoutes.map(route => <Route path={route.path} element={route.Component}/>), <Route path={'*'} element={ <Login />} />]
                }
            </Route>
        )
    )

    return <RouterProvider router={router}/>
}