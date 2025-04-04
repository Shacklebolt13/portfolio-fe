"use client";
import {
  Navbar,
  NavbarBrand,
  Avatar,
  NavbarContent,
  Button,
} from "@heroui/react";
import NextLink from "next/link";

import ContactModal from "./contactModal";
import { ContactModel } from "@/schema/ContactModel";

export default function StaticNavbar({
  contactDetail,
}: {
  contactDetail?: ContactModel;
}) {
  const contactModal = ContactModal({ contactDetail });

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Avatar
          as={NextLink}
          src={`/dp.jpg`}
          size="md"
          href="/"
          color="primary"
          isBordered
        />
        <NavbarContent justify="end">
          <>
            <Button
              onPress={contactModal.onOpen}
              variant="bordered"
              color="primary"
            >
              About
            </Button>
            {contactModal.modal}
          </>

          <Button
            variant="bordered"
            color="primary"
            as={NextLink}
            href="/showcase"
          >
            Showcase
          </Button>

          <Button
            as={NextLink}
            variant="bordered"
            color="primary"
            download={true}
            href="/gagandeep_resume.pdf"
          >
            Resume
          </Button>
        </NavbarContent>
      </NavbarBrand>
    </Navbar>
  );
}
