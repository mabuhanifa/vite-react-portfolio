import React from "react";
import { FaServer } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { MdWeb } from "react-icons/md";
import Service from "./modals/Service";
export default function Services() {
  
  const data = [
    {
      name: "Static Website",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos exercitationem accusamus, at placeat cupiditate sint labore voluptatum iusto, quia, voluptatibus fugit doloremque quisquam ducimus explicabo!",
      icon: MdWeb,
    },
    {
      name: "Single Page Application",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos exercitationem accusamus, at placeat cupiditate sint labore voluptatum iusto, quia, voluptatibus fugit doloremque quisquam ducimus explicabo!",
      icon: IoIosApps,
    },
    {
      name: "Web Application",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos exercitationem accusamus, at placeat cupiditate sint labore voluptatum iusto, quia, voluptatibus fugit doloremque quisquam ducimus explicabo!",
      icon: FaServer,
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-3 place-content-center gap-5 dark:text-gray-300">
        {data.map((data, i) => (
          <Service data={data} key={i} />
        ))}
        
      </div>
      
    </>
  );
}
