// Tab.tsx

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface QRCodeTabProps {
  tabs: React.ReactNode[];
  tabTitles: string[];
  setTitleIndex: React.Dispatch<React.SetStateAction<number>>;
}

const QRCodeTab: React.FC<QRCodeTabProps> = ({
  tabs,
  tabTitles,
  setTitleIndex,
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleChangeTab = (index: number) => {
    setSelectedTab(index);
    setTitleIndex(index);
  };

  return (
    <div className="">
      <div className="mb-4 flex list-none flex-row flex-wrap border-b-0 pl-0">
        {tabTitles.map((title, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              selectedTab === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleChangeTab(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={tabVariants}
          className="mt-4"
        >
          {/* Content for the selected tab */}
          {tabs[selectedTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QRCodeTab;
