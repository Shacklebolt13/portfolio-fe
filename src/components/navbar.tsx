"use client";
import {
  Navbar,
  NavbarBrand,
  Avatar,
  NavbarContent,
  Button,
  Link,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";

import { PROFILE_PICTURE_FILE_NAME } from "@/constants/public-assets";

export const StaticNavbar = () => {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Avatar
          as={Link}
          src={`/${PROFILE_PICTURE_FILE_NAME}`}
          size="md"
          href="/"
          color="primary"
          isBordered
        />

        <NavbarContent justify="end">
          <Button as={Link} variant="bordered" color="primary" href="/about">
            Contact
          </Button>

          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button variant="bordered" color="primary">
                Showcase
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded">
              <DropdownItem href="/projects">Projects</DropdownItem>
              <DropdownItem href="/tech">Tech</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button as={Link} variant="bordered" color="primary" href="/resume">
            Resume
          </Button>
        </NavbarContent>
      </NavbarBrand>
    </Navbar>
  );
};
