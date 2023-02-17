
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Plans } from "./pages/plans";
import { Profile } from "./pages/profile";
import { MyPlannings } from "./pages/profile/MyPlannings";
import { NewPlanning } from "./pages/profile/newPlanning";
import { GalleryCases } from "./pages/profile/galleryCases";
import { UserContextProvider } from './contexts/UserContext';
export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registrar" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route element={<UserContextProvider children/>}>
                <Route path="/planos/:id?" element={<Plans/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profile/meus-planejamentos" element={<MyPlannings/>}/>
                <Route path="/profile/novo-planejamento" element={<NewPlanning/>}/>
                <Route path="/profile/galeria" element={<GalleryCases/>}/>
            </Route>  
        </Routes>
    )
}