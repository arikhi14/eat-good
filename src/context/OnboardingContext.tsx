import { createContext, ReactNode, useContext, useState } from "react";

type OnboardingData = {
  name: string;
  birthdate: string;
  email: string;
  marketingOptIn: boolean;

  goals: string[];
  restrictions: string[];

  heightFeet: string;
  heightInches: string;
  weight: string;

  favoriteFoods: string[];
  healthConditions: string[];

  city: string;
};

type OnboardingContextType = {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
};

const defaultData: OnboardingData = {
  name: "",
  birthdate: "",
  email: "",
  marketingOptIn: false,

  goals: [],
  restrictions: [],

  heightFeet: "",
  heightInches: "",
  weight: "",

  favoriteFoods: [],
  healthConditions: [],

  city: "",
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined,
);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>(defaultData);

  function updateData(updates: Partial<OnboardingData>) {
    setData((current) => ({
      ...current,
      ...updates,
    }));
  }

  return (
    <OnboardingContext.Provider value={{ data, updateData }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("useOnboarding must be used inside OnboardingProvider");
  }

  return context;
}
