import React, { createContext, ReactNode, useState } from "react";

interface layoutContextType {
  activeTabState: number;
  handleAboutLayoutState: () => void;
}

const tabsDefaultValue: layoutContextType = {
  activeTabState: 0,
  handleAboutLayoutState: () => {},
};

const aboutPageLayoutContext =
  createContext<layoutContextType>(tabsDefaultValue);

const aboutPageLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [activeTabState, setActiveTabState] = useState<layoutContextType>(
    tabsDefaultValue.activeTabState
  );
  const handleAboutLayoutState = (newValue: number) => {
    setActiveTabState(newValue);
  };
  return (
    <aboutPageLayoutContext.Provider
      value={{ activeTabState, handleAboutLayoutState }}
    >
      {children}
    </aboutPageLayoutContext.Provider>
  );
};

export default aboutPageLayoutProvider;
