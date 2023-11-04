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

interface InterestsSectionProps {
  code: string;
  interests?: string[] | null;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({
  code,
  interests,
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [hidden, setHidden] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));
  const [fetchedInterests, setFetchedInterests] = useState<string[]>([]);

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

  useEffect(() => {
    const fetchInterests = async () => {
      const res = await fetch(`${BASE_URL}/interests/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // TODO: get session from user
        },
      });

      const interests = await res.json();

      setFetchedInterests(interests);
    };
  }, []);

  return (
    <section className="flex flex-col mb-5 space-y-5 w-11/12 md:w-2/3 mx-auto md:mx-0">
      <div className="flex">
        <h3 className="font-bold text-left text-xl">Interesses</h3>
        <button className="text-black" onClick={handleChange}>
          <Pencil className="relative right-0 bottom-0 w-6 h-6 text-black ml-2" />
        </button>
        <div className="flex items-center w-5/6 mx-auto md:mx-0 gap-x-6">
          {!hidden && (
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="capitalize">
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              {interests && isEditable && (
                <DropdownMenu
                  aria-label="Multiple selection example"
                  variant="flat"
                  closeOnSelect={false}
                  disallowEmptySelection
                  selectionMode="multiple"
                  selectedKeys={selectedKeys}
                  onSelectionChange={handleSubmit}
                >
                  {fetchedInterests.map((_, interest) => (
                    <DropdownItem key={interest}>{interest}</DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </Dropdown>
          )}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
