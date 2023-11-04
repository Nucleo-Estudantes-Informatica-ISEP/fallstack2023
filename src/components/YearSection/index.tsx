"use client";

import { BASE_URL } from "@/services/api";
import { Pencil } from "@/styles/Icons";
import { useRef, useState, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import React from "react";

const YearSection = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [hidden, setHidden] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleChange = () => {
    setHidden(false);
    setIsEditable(true);
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  async function handleSubmit() {
    setHidden(true);
    setIsEditable(false);
  }

  return (
    <section className="flex flex-col mb-5 space-y-5 w-11/12 md:w-2/3 mx-auto md:mx-0">
      <div className="flex">
        <h3 className="font-bold text-left text-xl">Ano de Curso</h3>
        <div className="flex items-center w-5/6 mx-auto md:mx-0 gap-x-6">
          <button className="text-black" onClick={handleChange}>
            <Pencil className="relative right-0 bottom-0 w-6 h-6 text-black ml-2" />
          </button>
          {!hidden && (
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="bordered" className="capitalize">
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              {isEditable && (
                <DropdownMenu
                  aria-label="Single selection"
                  variant="faded"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                >
                  <DropdownItem key="LEI - 1º Ano">LEI - 1º Ano</DropdownItem>
                  <DropdownItem key="LEI - 2º Ano">LEI - 2º Ano</DropdownItem>
                  <DropdownItem key="LEI - 3º Ano">LEI - 3º Ano</DropdownItem>
                  <DropdownItem key="MEI - 1º Ano">MEI - 1º Ano</DropdownItem>
                  <DropdownItem key="MEI - 2º Ano">MEI - 2º Ano</DropdownItem>
                </DropdownMenu>
              )}
            </Dropdown>
          )}
        </div>
      </div>
    </section>
  );
};

export default YearSection;
