import type { ReactElement } from "react";
import "../styles/App.css";
import { Outlet } from "react-router-dom";

export function App(): ReactElement {
    return (
        <>
            <Outlet />
        </>
    );
}
