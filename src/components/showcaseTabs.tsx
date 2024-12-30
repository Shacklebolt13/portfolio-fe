"use client";

import { EXPERIENCE_COLLECTION } from "@/constants/dbconstants";
import { Model } from "@/dtos/server";
import { Card, CardBody, Divider, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function populateCards(collection_name: string, data: Model) {
  console.log(data?.showcase?.id)
  return (
    <Card
      as={Link}
      href={`/${collection_name}/${data.showcase.id}`}
      className="flex m-1"
      key={data.showcase.id}
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
            <p>
              <span className="xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-sm font-bold">{data.showcase.title}</span>
              <br />
              <small className="text-default-500 md:text-sm sm:text-xs ">
                {data.showcase.description}
              </small>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const getSelectedTab = () => searchParams.get("tab") ?? undefined;
  const setSelectedTab = (tab: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("tab", tab);

    const newUrl = `${pathname}?${newSearchParams.toString()}`;
    router.replace(newUrl);
  }

  var selectedTab = getSelectedTab() ?? EXPERIENCE_COLLECTION;
  var [tab, setTab] = useState(selectedTab);

  useEffect(() => {
    if (selectedTab === undefined) {
      setSelectedTab(tab);
    }
  });

  useEffect(() => {
    setSelectedTab(tab);
  });

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

  return <Tabs className="max-w-full" defaultSelectedKey={tab} onSelectionChange={(key) => setTab(key.toString())} >{Array.from(tabs.values())}</Tabs>;
}
