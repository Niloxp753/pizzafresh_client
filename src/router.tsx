import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
        </Routes>
    );
}

export default Router;