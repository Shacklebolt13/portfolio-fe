"use client";
import {
  Navbar,
  NavbarBrand,
  Avatar,
  NavbarContent,
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";
import NextLink from "next/link";

import { PROFILE_PICTURE_FILE_NAME } from "@/constants/public-assets";
import ContactModal from "./contactModal";
import { Model } from "@/db/getRepository";

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
              onPress={contactModal.onOpen}
              variant="bordered"
              color="primary"
            >
              Contact
            </Button>
            {contactModal.modal}
          </>

          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button variant="bordered" color="primary">
                Showcase
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded">
              <DropdownItem as={NextLink} href="/projects">
                Projects
              </DropdownItem>
              <DropdownItem as={NextLink} href="/tech">
                Tech
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button
            as={NextLink}
            variant="bordered"
            color="primary"
            href="/resume"
          >
            Resume
          </Button>
        </NavbarContent>
      </NavbarBrand>
    </Navbar>
  );
}
