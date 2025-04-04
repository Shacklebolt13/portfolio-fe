"use client";
import { ContactModel } from "@/schema/ContactModel";
import { Avatar, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import Link from "next/link";

export default function ContactModal({
  contactDetail,
}: {
  contactDetail?: ContactModel;
}) {
  const modalControl = useDisclosure();

  const modal = (
    <>
      <Modal
        isOpen={modalControl.isOpen}
        onOpenChange={modalControl.onOpenChange}
        backdrop="blur"
        size="sm"
        isDismissable
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                {contactDetail?.title}
              </ModalHeader>
              <ModalBody>
                Hi there I am Gagandeep Singh Bhambrah.<br /> I am from Raurkela, India, and I am a Backend developer.
                I enjoy playing online games, watching movies and exploring new technologies.
                <br /><br />
                A fun fact about me is that I used to play PUBG Mobile,
                and have played tournaments with Scout, Mavi and some other players from OrangeRock.
                <br /><br />
                Please feel free to check out my github and reach out using below links.

              </ModalBody>
              <ModalFooter>
                {contactDetail?.related_links.map((linkDetail) => (
                  <Avatar
                    src={linkDetail.icon}
                    size="lg"
                    key={linkDetail.title}
                    title={linkDetail.title}
                    as={Link}
                    target="_blank"
                    href={linkDetail.link ?? "#"}
                  />
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
