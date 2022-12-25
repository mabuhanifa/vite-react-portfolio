import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "./Modal";

export default function Service({ data: { name, info, icon } }) {
  const Icon = icon;
  const [modal, setModal] = useState(false);
  return (
    <div className="p-5 bg-white rounded-lg shadow-lg dark:text-gray-300">
      <div className="flex justify-center items-center">
        <Icon className="text-8xl text-gray-700" />
      </div>
      <h1 className="text-xl font-bold text-slate-700 my-5">{name}</h1>
      <p>{info}</p>

      <button
        onClick={() => setModal(true)}
        className="text-gray-800 my-5 border border-gray-500 p-2 rounded bg-gray-200"
      >
        View More <BsArrowRight className="inline text-xl mx-2" />{" "}
      </button>

      <Modal view={modal} setModal={setModal} data={name} />
    </div>
  );
}
