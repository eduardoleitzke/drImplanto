import { Menu } from "../components/menu";
import { ContactUsContainer, ContactUsContent,TicketList } from "./styles";
import {useForm} from 'react-hook-form'
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CaretDown } from "phosphor-react";
import { AccordionContet, AcordionCardHeader, PlanningDetails, PlanningStateContent, PlanningState, AccordionBody, AccordionContainer,AccordionTrigger } from "../MyPlannings/components/allPlannings/styles";
export function Contact(){
    const {register, handleSubmit} = useForm()
    return (
        <ContactUsContainer>
            <Menu/>
            <ContactUsContent>
            <form onSubmit={handleSubmit(()=>console.log('a'))}>
                            <h3>ENTRE EM CONTATO</h3>
                            <p>
                                Aqui você pode criar e checar seus tickets em andamento ou abrir um chat para falar com o suporte.
                            </p>
                            <div>
                                <span>ESCOLHA UM ASSUNTO</span>
                                <select {...register('topic')}>
                                    <option value="Problema com pagamento" key="1">Problema com pagamento</option>
                                    <option value="Outro" key="2">Outro</option>
                                </select>
                            </div>
                            <div>
                                <span>TITULO DO TICKET</span>
                                <input {...register('title')} type="text" placeholder="Insira aqui o nome de seu ticket" />
                            </div>
                            
                            <div>
                                <span>DETALHES</span>
                                <input {...register('details')} type="text" placeholder="Escreva aqui os detalhes sobre seu ticket." />
                            </div>
                            <div>
                                <span>ANEXAR IMAGENS</span>
                                <input {...register('images')} type="file" placeholder="Fazer upload de novas imagens" multiple/>
                            </div>
                            
                            <button>Abrir ticket</button>
                        </form>
                        <TicketList>
                            <h4>MEUS TICKETS</h4>
                            <AccordionContainer type="multiple">
                                <AccordionContet  value='item1'>
                                    <AcordionCardHeader>
                                        <PlanningDetails>
                                            <p>ASSUNTO  <span>Problema com pagamento</span></p>
                                            <p>DATA DA SOLICITAÇÃO <span>10/11/2022</span></p>
                                            <p>TITULO <span>Ajuda no pagamento</span></p>
                                        </PlanningDetails>
                                        <PlanningStateContent>
                                            <PlanningState>
                                                <p>STATUS</p>
                                                <div>
                                                    <p>Aberto</p>
                                                    <span>há 2 dias</span>
                                                </div>
                                            </PlanningState>
                                            <AccordionTrigger>
                                                <CaretDown size={32} color='#21B1D6' weight='bold'/>
                                            </AccordionTrigger>
                                        </PlanningStateContent>
                                    </AcordionCardHeader>
                                    <AccordionBody>
                                        <p>DESCRIÇÃO</p>
                                        <span>
                                            teste teste teste
                                        </span>
                                        <button type="button">Ver Planejamento</button>
                                    </AccordionBody>
                                </AccordionContet>
                            </AccordionContainer>
                        </TicketList>
                        
                     
            </ContactUsContent>
        </ContactUsContainer>
    )
}