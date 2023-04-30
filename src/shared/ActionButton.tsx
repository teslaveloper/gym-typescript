import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  targetSelection: SelectedPage;
};

const ActionButton = ({ children, setSelectedPage, targetSelection }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(targetSelection)}
      href={`#${targetSelection}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
