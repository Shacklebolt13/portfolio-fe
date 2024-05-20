"use client";

import { Model } from "@/db/getRepository";
import { Card, CardBody, Divider, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

function populateCards(collection_name: string, data: Model) {
  const va = (
    <Card
      as={Link}
      href={`/${collection_name}/${data.showcase.id}`}
      className="flex m-1"
    >
      <CardBody>
        <div className="flex">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={data.showcase.icon}
            width={50}
            height={100}
          />
          <Divider orientation="vertical" className="mx-4 bg-primary" />
          <div>
            <h5>{data.showcase.title}</h5>
            <small className="text-default-500">
              {data.showcase.description}
            </small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
  return va;
}

function populateCardArea(collection_name: string, data: Model[] | undefined) {
  if (typeof data === "undefined" || data.length === 0) {
    return <div className="flex justify-center"> Nothing to Show Yet !</div>;
  }
  return (
    <div className="flex flex-col ">
      {data.map((data) => {
        return populateCards(collection_name, data);
      })}
    </div>
  );
}

export default function ShowCaseTabs(props: { data: Map<string, Model[]> }) {
  console.log("invoked showcaseComponent");
  const tabs = new Map<string, JSX.Element>();

  const capAndPlurify = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1) + "s";
  };

  props.data.forEach((value, key) => {
    tabs.set(
      key,
      <Tab key={key} title={capAndPlurify(key)}>
        <Card>
          <CardBody>
            {populateCardArea(
              key,
              value.sort((a, b) => b.showcase.id.localeCompare(a.showcase.id))
            )}
          </CardBody>
        </Card>
      </Tab>
    );
  });

  return <Tabs>{Array.from(tabs.values())}</Tabs>;
}
