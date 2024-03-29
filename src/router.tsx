
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
import { AdminContextProvider } from "./contexts/AdminContext";
import { Contact } from "./pages/profile/contactUs";
import { RecoveryPassword } from "./pages/recoveryPassword";
import { ChangePassword } from "./pages/changePassword";
import { Settings } from "./pages/profile/settings"
import { Admin } from "./pages/admin";
import { AdminMyPlannings } from "./pages/admin/MyPlannings";
export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registrar" element={<Register/>}/>
            <Route path="/trocar-senha/:token" element={<ChangePassword/>}/>
            <Route path="/recuperar-senha/" element={<RecoveryPassword/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route element={<UserContextProvider children/>}>
                <Route path="/planos/:id?" element={<Plans/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/profile/meus-planejamentos" element={<MyPlannings/>}/>
                <Route path="/profile/novo-planejamento" element={<NewPlanning/>}/>
                <Route path="/profile/galeria" element={<GalleryCases/>}/>
                <Route path="/profile/contato" element={<Contact/>}/>
                <Route path="/profile/configuracoes" element={<Settings/>}/>
                
            </Route>
            <Route element={<AdminContextProvider children/>}>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/admin/planejamentos" element={<AdminMyPlannings/>}></Route>
            </Route>
        </Routes>
    )
}