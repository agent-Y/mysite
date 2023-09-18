import { AiOutlineExclamationCircle } from "react-icons/ai";

interface InputProps {
 isError: boolean;
 placeholder: string;
}

export const Input = ({ isError, ...props }: InputProps) => {
 return (
  <div className="relative flex items-center">
   <input
    {...props}
    className={`w-full relative text-primary p-2 md:p-4 outline-none border-b border-gray text-sm md:text-base rounded-md ${
     isError ? "border-red border-b-2" : ""
    }`}
   />
   {isError && (
    <AiOutlineExclamationCircle className="text-red m-4 absolute right-0" />
   )}
  </div>
 );
};

interface TextAreaProps {
 isError: boolean;
 placeholder: string;
 rows: number;
 cols: number;
}
export const TextArea = ({ isError, ...props }: TextAreaProps) => {
 return (
  <div className="relative flex">
   <textarea
    {...props}
    className={`w-full text-primary border-gray p-2 md:p-4 outline-none text-sm md:text-base rounded-md ${
     isError ? "border-b-2 border-red" : ""
    }`}
   />
   {isError && (
    <AiOutlineExclamationCircle className="text-red absolute m-4 right-0" />
   )}
  </div>
 );
};
