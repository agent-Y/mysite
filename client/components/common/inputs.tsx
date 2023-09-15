export const Input = ({ ...props }) => {
 return (
  <input {...props} className="w-full text-primary p-4 outline-none border-b" />
 );
};

export const TextArea = ({ ...props }) => {
 return (
  <textarea {...props} className="w-full text-primary p-4 outline-none " />
 );
};
