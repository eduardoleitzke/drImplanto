import { useEffect } from "react";
import { api } from "../../lib/axios";
import { AdminContext } from "../../contexts/AdminContext";
import { useContext } from "react";
import { Menu } from "./components/Menu";
import { AdminContainer } from "./styles";
import { AdminHome } from "./components/AdminHome";
export function Admin() {
  const { validToken, loggedUser } = useContext(AdminContext);
  return (
    <>
      {!validToken ? (
        <></>
      ) : (
        <>
          {!loggedUser.isAdmin ? (
            <h1>UNAUTHORIZED</h1>
          ) : (
            <AdminContainer>
              <Menu />
              <AdminHome></AdminHome>
            </AdminContainer>
          )}
        </>
      )}
    </>
  );
}
