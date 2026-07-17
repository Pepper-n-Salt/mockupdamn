"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface Context {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<Context | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be inside LanguageProvider");
  }

  return context;
}
