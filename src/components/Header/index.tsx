import logoImg from '../../assets/logo.svg';
import { Container, Content } from "./styles";

interface HeaderProps {
  onNewTransactionOpen: () => void;
}

export function Header({onNewTransactionOpen}: HeaderProps) {  
  return (
    <Container>
      <Content>      
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onNewTransactionOpen}>
          Nova transação
        </button>        
      </Content>
    </Container>
  )
}