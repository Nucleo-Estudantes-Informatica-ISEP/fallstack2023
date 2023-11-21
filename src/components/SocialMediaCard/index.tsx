import React from "react";

interface SocialMediaCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  title,
  icon,
  href,
}) => {
  return (
    <li className="flex list-none flex-row flex-wrap justify-around">
      <a
        className="text-social-media-link m-4 flex w-full flex-col items-center justify-center rounded-lg transition-all duration-200 ease-in-out hover:scale-110"
        href={href}
      >
        <div className="mb-2 text-4xl">{icon}</div>
        <span className="text-base">{title}</span>
      </a>
    </li>
  );
};

export default SocialMediaCard;
