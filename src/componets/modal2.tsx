import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaHandsHelping } from "react-icons/fa";
interface ButtonsProps {
    content: React.ReactNode;
    btnName: string;
    tHeader: string;
    Pcenter: string;

  }
export default function App({ content, tHeader,Pcenter , btnName }: ButtonsProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}> {btnName}</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent className="max-w-4xl mx-auto flex flex-col gap-4">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center gap-1">{tHeader}</ModalHeader>
                            <ModalBody>
                                <div className="w-full flex flex-col justify-center items-center mx-auto gap-8">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-center text-sm md:text-base">
                                        {Pcenter}
                                        </p>
                                    </div>
                                    <div className="flex gap-6">
                                       {content}
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
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
