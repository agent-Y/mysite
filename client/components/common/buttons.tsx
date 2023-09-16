import ClipLoader from "react-spinners/ClipLoader";

export const SubmitButton = ({ ...props }) => {
 return (
  <button
   disabled={props.submitting}
   type="submit"
   className="w-full text-white bg-primary border py-2 rounded-lg relative flex justify-center items-center hover:bg-primary/70"
  >
   {props.submitting ? (
    <p>
     送信中...
     <ClipLoader size={18} className="absolute right-4" color="#fff" />
    </p>
   ) : props.status ? (
    <p>{props.status}</p>
   ) : (
    <p>送信</p>
   )}
  </button>
 );
};

export const CloseButton = ({ onClose }: { onClose: () => void }) => {
 return (
  <button
   className="bg-primary text-white mt-4 px-4 py-2 rounded hover:bg-primary-dark"
   onClick={onClose}
  >
   閉じる
  </button>
 );
};
