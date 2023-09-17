import { CloseButton } from "@/components/common/buttons";
import { motion } from "framer-motion";
export default function SuccessModal({
 handleCloseModal,
}: {
 handleCloseModal: () => void;
}) {
 return (
  <div className="fixed inset-0  flex items-center justify-center bg-primary z-50 p-2">
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white w-full p-8 rounded-lg shadow-lg max-w-xl mx-auto"
   >
    <h1 className="text-2xl text-primary mb-4">
     お問い合わせが正常に送信されました！
    </h1>
    <p className="text-gray text-sm">
     お問い合わせを受け付けました。できるだけ迅速にお問い合わせ内容に対する返信を致します。お時間をいただき、誠にありがとうございます。
    </p>
    <p className="text-gray text-sm mt-2">
     ご質問やお困りごとがある場合は、いつでもお気軽にお知らせください。お手伝いできることがあれば、どうぞお知らせください。
    </p>
    <div className="flex justify-end">
     <CloseButton onClose={handleCloseModal} />
    </div>
   </motion.div>
  </div>
 );
}
