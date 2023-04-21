import { Menu } from "../components/menu";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import {
  ChangePassword,
  PersonalDetails,
  PlanDetails,
  SettingsContainer,
  SettingsContent,
} from "./styles";

export function Settings() {
  const { validToken,loggedUser } = useContext(UserContext);
  console.log(loggedUser)
  return (
    <SettingsContainer>
      {validToken && (
        <>
          <Menu />
          <SettingsContent>
            <section>
              <h3>CONFIGURAÇÕES</h3>
              <span>
                Aqui você pode verificar e alterar suas informações de conta e
                seu plano selecionado.
              </span>
              <PersonalDetails>
                <h4>INFORMAÇÕES PESSOAIS</h4>
                <ul>
                  <li>
                    <label>NOME COMPLETO</label>
                    <span>{loggedUser.email}</span>
                  </li>

                  <li>
                    <label>CPF</label>
                    <span>DSAD</span>
                  </li>

                  <li>
                    <label>DATA DE NASCIMENTO</label>
                    <span>DSADA</span>
                  </li>

                  <li>
                    <label>EMAIL</label>
                    <span>{loggedUser.email}</span>
                  </li>
                </ul>
              </PersonalDetails>
              <ChangePassword>
                <h4>ALTERAR SENHA</h4>
                <span>
                  Clicando no botão abaixo, você recebera um email para poder
                  criar uma nova senha para sua conta.
                </span>
                <button>Alterar Senha</button>
              </ChangePassword>
            </section>
            <section>
              <PlanDetails>
                <h4>DADOS DE PAGAMENTO</h4>
                <ul>
                  <li>
                    <label>TIPO DE PLANO</label>
                    <span>{loggedUser.plan}</span>
                  </li>

                  <li>
                    <label>EXPIRAÇÃO DO PLANO</label>
                    <span>12/10/2026</span>
                 </li>
                </ul>
                <button>Cancelar ou Mudar Plano</button>
              </PlanDetails>
            </section>
          </SettingsContent>
        </>
      )}
    </SettingsContainer>
  );
}
