"use client";

import { METHODS, URL } from "@/assets/constants/api-requests";
import { ErrorLogger } from "@/services/ErrorLogger";
import getComponent from "@/services/PackageSelector";
import { request } from "@/services/fetchData";
import { ComponentType, FC, useEffect, useState } from "react";

export default function Home() {
  const [homeData, setHomeData] = useState([]);
  const logger = new ErrorLogger();

  const fetchHomeData = async () => {
    try {
      const data = await request(URL?.GET_Home_Data, METHODS.GET);

      setHomeData(data?.data && data?.data[0]?.curation?.packages);

      console.log(data);
    } catch (error: any) {
      logger.logError(
        "Menu",
        error?.message as string,
        new Date().toISOString()
      );
    }
  };

  useEffect(() => {
    fetchHomeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="h-full">
      {" "}
      {homeData &&
        homeData?.length > 0 &&
        homeData?.map((content: any, i: number) => {
          let Component: ComponentType<any> = () => <></>;
          try {
            Component = getComponent(content.packageType);
          } catch (error) {
            console.log("object", error);
          }

          return (
            <div key={i}>
              <Component
                data={content.contents}
                title={content.title}
                type={content?.packageType}
              />
            </div>
          );
        })}
    </main>
  );
}
