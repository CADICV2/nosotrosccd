import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

interface ButtonsProps {
  content: React.ReactNode;
  btnName: React.ReactNode;
  btndow: React.ReactNode;
  tHeader: string;
  Pcenter: React.ReactNode;
  doc: React.ReactNode;
}

export default function App({ content,btndow, tHeader, Pcenter, btnName,doc }: ButtonsProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button  onPress={onOpen}> {btnName}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent className="max-w-4xl mx-auto flex flex-col ">
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center ">{tHeader}</ModalHeader>
              <ModalBody>
                <div className="w-full flex flex-col justify-center items-center mx-auto gap-8">
                  <div className="flex flex-col gap-4">
                    <p className="text-center text-sm md:text-base">
                      {Pcenter}
                    </p>
                  </div>
                  <div className="flex gap-6 w-full">
                 {doc}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                {btndow}
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
