"use client";

import { EDUCATION_SUBSECTION, EXPERIENCE_SUBSECTION } from "@/constants/subsections";
import { TabModel } from "@/schema/TabModel";
import { Card, CardBody, Divider, Tab, Tabs } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function populateCards(collection_name: string, data: TabModel) {
  console.log(data?.id)
  return (
    <Card
      as={Link}
      href={`/${collection_name}/${data.id}`}
      className="flex m-1"
      key={data.id}
    >
      <CardBody>
        <div className="flex">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={data.icon}
            width={50}
            height={100}
          />
          <Divider orientation="vertical" className="mx-4 bg-primary" />
          <div>
            <p>
              <span className="xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-sm font-bold">{data.title}</span>
              <br />
              <small className="text-default-500 md:text-sm sm:text-xs ">
                {data.description}
              </small>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function populateCardArea(collection_name: string, data: TabModel[] | undefined) {
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



export default function ShowCaseTabs(props: { data: Map<string, TabModel[]> }) {
  console.log("invoked showcaseComponent");
  const tabs = new Map<string, React.ReactNode>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSelectedTab = (tab: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("tab", tab);
    const newUrl = `${pathname}?${newSearchParams.toString()}`;
    router.replace(newUrl);
  }

  var selectedTab = searchParams.get("tab") ?? EDUCATION_SUBSECTION;
  var [tab, setTab] = useState(selectedTab);

  const capAndPluralize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1) + "s";
  };

  props.data.forEach((value, key) => {
    tabs.set(
      key,
      <Tab key={key} title={capAndPluralize(key)}>
        <Card>
          <CardBody>
            {populateCardArea(
              key,
              value.sort((a, b) => b.id.localeCompare(a.id))
            )}
          </CardBody>
        </Card>
      </Tab>
    );
  });

  return <Tabs
    className="min-w-full inline-flex flex-col"
    defaultSelectedKey={tab}
    onSelectionChange={(key) => {
      setTab(key.toString())
      setSelectedTab(key.toString())
    }}
  >
    {Array.from(tabs.values())}
  </Tabs>;
}
