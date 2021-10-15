import * as React from "react";
interface InterfaceModalContext {
    isModal: boolean
    handleShowModal?: () => void
}
export const ModalContext = React.createContext<InterfaceModalContext>({isModal:false, handleShowModal: undefined})

const ModalProvider:React.FC<React.ReactNode> = ({children}) => {
  const [isModal, setIsModal] = React.useState(false)
  const closeModal = () => false;
  const openModal = () => true;
  const handleShowModal = () => {
    if(isModal === false) {
      setIsModal(openModal())
    }
    if(isModal === true) {
      setIsModal(closeModal())
    }
  }

    return(
        <ModalContext.Provider value={{isModal, handleShowModal}}>
            {children}
        </ModalContext.Provider>
    )

}

export default ModalProvider