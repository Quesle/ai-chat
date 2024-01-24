import React from "react";

export interface PanelProps {
  children?: React.ReactNode;
}

const Panel: React.FC<PanelProps> = (props) => {
  const { children } = props;

  return <div className="p-4">{children}</div>;
};

export default Panel;
