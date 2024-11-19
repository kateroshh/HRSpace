import { ChangeEvent, ReactNode } from "react";

export type MobileProps = {
  isMobile?: boolean;
};

export type TFormProgress = {
  currentStep: number;
};

export type TTextError = {
  children?: ReactNode | string;
};

export type TOption = {
  id: number;
  name: string;
  tips?: boolean;
};

export type TOptions = {
  options: TOption[];
};

export type TInput = {
  label?: string;
  name: string;
  placeholder: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export type TInputOptions = {
  options: TOptions["options"];
  onClick: (item: TOption) => void;
};

export type TInputWithSearch = TInput & {
  isMulty: boolean;
  isTips: boolean;
};

export type TInputTips = {
  isMulty: boolean;
  isTips: boolean;
  children?: ReactNode | string;
  selectOptions: TOptions["options"];
  onDelete: (item: TOption) => void;
  listOptions: TOptions["options"];
  onClick: (item: TOption) => void;
};
