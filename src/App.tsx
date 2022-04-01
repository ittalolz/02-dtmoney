import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { TransactionProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onNewTransactionOpen={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        onRequestClose={handleCloseNewTransactionModal} 
        isOpen={isNewTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}