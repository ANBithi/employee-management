import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast
  } from '@chakra-ui/react'
import leaveService from '../../services/leave.service'

const PendingModal = ({isOpen, onClose, currentLeave}) => {
const toast = useToast();
const onRejectClick =()=>{

    leaveService.changeLeaveStatus(2,currentLeave.id).then((d)=>{
        if(d === true) {
            toast({
                containerStyle: {
                    fontSize: "14px",
                    fontWeight: "normal",
                },
                title: "Rejected",
                position: "bottom-right",
                variant: "subtle",
                status: "error",
                duration: 1000,
                isClosable: true,
            });
        }
    })		
    };

const onAcceptClick =()=>{
    leaveService.changeLeaveStatus(1,currentLeave.id).then((d)=>{
        if(d === true) {
            toast({
                containerStyle: {
                    fontSize: "14px",
                    fontWeight: "normal",
                },
                title: "Accepted",
                position: "bottom-right",
                variant: "subtle",
                status: "success",
                duration: 1000,
                isClosable: true,
            });
        }
    })
}

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onRejectClick}>
              Reject
            </Button>
            <Button colorScheme='green' mr={3} onClick={onAcceptClick}>
              Accept
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}
export default PendingModal;