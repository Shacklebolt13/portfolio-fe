"use client";
import {
  Navbar,
  NavbarBrand,
  Avatar,
  NavbarContent,
  Button,
} from "@heroui/react";
import NextLink from "next/link";

import { PROFILE_PICTURE_FILE_NAME } from "@/constants/public-assets";
import ContactModal from "./contactModal";
import { Model } from "@/schema/Model";

export default function StaticNavbar({
  contactDetail,
}: {
  contactDetail?: Model;
}) {
  const contactModal = ContactModal({ contactDetail });

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Avatar
          as={NextLink}
          src={`/${PROFILE_PICTURE_FILE_NAME}`}
          size="md"
          href="/"
          color="primary"
          isBordered
        />
        <NavbarContent justify="end">
          <>
            <Button
              // onPress={contactModal.onOpen}
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
            href="/gagandeep_resume.md.pdf"
          >
            Resume
          </Button>
        </NavbarContent>
      </NavbarBrand>
    </Navbar>
  );
}
