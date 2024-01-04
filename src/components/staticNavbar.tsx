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

export default () => {
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
          <Button
            as={NextLink}
            variant="bordered"
            color="primary"
            href="/contact"
          >
            Contact
          </Button>

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
};
