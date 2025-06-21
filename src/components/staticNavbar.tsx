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
    <Navbar maxWidth="full" className="backdrop-blur-md bg-background/30 border-b border-primary/20">
      <NavbarBrand>
        <Avatar
          as={NextLink}
          src={`/dp.jpg`}
          size="sm"
          className="md:hidden shadow-md shadow-primary/20"
          href="/"
          color="primary"
          isBordered
        />
        <Avatar
          as={NextLink}
          src={`/dp.jpg`}
          size="md"
          className="hidden md:flex shadow-md shadow-primary/20"
          href="/"
          color="primary"
          isBordered
        />
        <NavbarContent justify="end">
          <>
            <Button
              onPress={contactModal.onOpen}
              variant="ghost"
              color="primary"
              className="backdrop-blur-sm bg-primary/10 hover:bg-primary/20 hover:text-black text-xs sm:text-sm min-w-0 px-2 sm:px-3 md:px-4"
              size="sm"
            >
              <span className="hidden sm:inline">About</span>
              <span className="sm:hidden">👤</span>
            </Button>
            {contactModal.modal}
          </>

          <Button
            variant="ghost"
            color="primary"
            as={NextLink}
            href="/showcase"
            className="backdrop-blur-sm bg-primary/10 hover:bg-primary/20 hover:text-black text-xs sm:text-sm min-w-0 px-2 sm:px-3 md:px-4"
            size="sm"
          >
            <span className="hidden sm:inline">Showcase</span>
            <span className="sm:hidden">🔍</span>
          </Button>

          <Button
            as={NextLink}
            variant="ghost"
            color="primary"
            download={true}
            href="/gagandeep_resume.pdf"
            className="backdrop-blur-sm bg-primary/10 hover:bg-primary/20 hover:text-black text-xs sm:text-sm min-w-0 px-2 sm:px-3 md:px-4"
            size="sm"
          >
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">📄</span>
          </Button>
        </NavbarContent>
      </NavbarBrand>
    </Navbar>
  );
}
