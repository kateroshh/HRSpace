import { ChangeEvent, ReactNode } from "react";

export type MobileProps = {
  isMobile?: boolean;
};

export type TFormProgress = {
  currentStep: number;
};

export type TInput = {
  label?: string;
  name: string;
  placeholder: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export type TTextError = {
  children?: ReactNode | string;
};

export type TOption = {
  id: number;
  name: string;
};

export type TOptions = {
  options: TOption[];
};

export type TInputOptions = {
  options: TOptions["options"];
  onClick: (item: TOption) => void;
};

export type TInputWithSearch = TInput & {
  isMulty: boolean;
};
