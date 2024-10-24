import "./TextError.scss";
import { TTextError } from "@/types/types";

const TextError = ({ children }: TTextError) => {
  return <div className="error">{children}</div>;
};

export default TextError;
