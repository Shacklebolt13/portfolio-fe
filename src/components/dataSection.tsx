"use client";
import { Card, CardBody } from "@nextui-org/react";

export default function DataSection({ data }) {
  return (
    <>
      <Card>
        <CardBody>test body {JSON.stringify(data)}</CardBody>
      </Card>
    </>
  );
}
