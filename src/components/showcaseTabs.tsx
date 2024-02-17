"use client";

import { Model } from "@/db/getRepository";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";

function populateCards(collection_name: string, data: Model) {
  return (
    <Card as={Link} href={`/${collection_name}/${data.id}`}>
      <CardBody>test {data.title}</CardBody>
    </Card>
  );
}

function populateCardArea(collection_name: string, data: Model[] | undefined) {
  if (typeof data === "undefined" || data.length === 0) {
    return <CardBody>Nothing to show yet.</CardBody>;
  }
  return (
    <div className="flex flex-wrap">
      {data.map((data) => {
        return populateCards(collection_name, data);
      })}
    </div>
  );
}

export default function ShowCaseTabs(props: { data: Map<string, Model[]> }) {
  console.log("invoked showcaseComponent");
  const tabs = new Map<string, JSX.Element>();

  props.data.forEach((value, key) => {
    tabs.set(
      key,
      <Tab key={key} title={key}>
        <Card>
          <CardBody>{populateCardArea(key, value)}</CardBody>
        </Card>
      </Tab>
    );
  });

  return <Tabs>{tabs}</Tabs>;
}
