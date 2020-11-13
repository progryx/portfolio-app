import React, { useContext } from 'react';

type WizardContextType = {
  currentStep: number;
  goTo: (value: number) => void;
};

export const WizardContext = React.createContext<WizardContextType>({
  currentStep: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  goTo: () => {},
});

export const useWizard = () => {
  const { currentStep, goTo } = useContext(WizardContext);

  return {
    currentStep,
    goTo,
  };
};

export const Wizard: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <WizardContext.Provider value={{ currentStep, goTo: setCurrentStep }}>
      {React.Children.map(children, (child, index) => (index === currentStep ? child : null))}
    </WizardContext.Provider>
  );
};
