import { Route, Routes } from "react-router-dom";
import { Home } from "../shared/components/Home";
import { GamePage } from "../Game/pages/GamePage";
export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/game" element={<GamePage/>}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Routes>
    );
}