"use client";

import { Model } from "@/db/getRepository";
import { Card, CardBody, CardFooter, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

function populateCards(collection_name: string, data: Model) {
  console.log(data.showcase ? "got it" : data);
  const va = (
    <Card as={Link} href={`/${collection_name}/${data.showcase.id}`}>
      <CardBody>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={data.showcase.icon}
          width={200}
          height={250}
        />
      </CardBody>
      <CardFooter>
        <div className="flex-col">
          <h4>{data.showcase.title}</h4>
          <small className="text-default-500">
            {data.showcase.description}
          </small>
        </div>
      </CardFooter>
    </Card>
  );
  return va;
}

function populateCardArea(collection_name: string, data: Model[] | undefined) {
  if (typeof data === "undefined" || data.length === 0) {
    return <div className="flex justify-center"> Nothing to Show Yet !</div>;
  }
  return (
    <div className="grid grid-col">
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
