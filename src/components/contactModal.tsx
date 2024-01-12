import { Model } from "@/db/getRepository";
import {
  Avatar,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

export default function ContactModal({
  contactDetail,
}: {
  contactDetail?: Model;
}) {
  const modalControl = useDisclosure();

  const modal = (
    <>
      <Modal
        isOpen={modalControl.isOpen}
        onOpenChange={modalControl.onOpenChange}
        size="sm"
        isDismissable
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                {contactDetail?.title}
              </ModalHeader>
              <ModalBody>
                Please feel free to contact me through any of the following
                links.
                <br />I usually respond very quickly.
                <br />I am also open to suggestions and feedback.
              </ModalBody>
              <ModalFooter>
                {contactDetail?.related_links.map((linkDetail) => (
                  <>
                    <Avatar
                      src={linkDetail.icon}
                      title={linkDetail.title}
                      as={Link}
                      target="_blank"
                      href={linkDetail.link ?? "#"}
                    />
                  </>
                ))}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
  return { ...modalControl, modal };
}
