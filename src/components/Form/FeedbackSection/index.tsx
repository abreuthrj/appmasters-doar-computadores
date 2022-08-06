import { MdCheckCircle, MdVerified } from "react-icons/md";

export default function FeedbackSection() {
  return (
    <div className="flex flex-col items-center justify-center text-black">
      <strong className="text-neutral-600 text-lg flex items-center gap-2">
        <MdCheckCircle size={36} color="green" />
        Formulário enviado!
      </strong>

      <span className="block text-neutral-400 text-sm mt-4">
        Agradecemos imensamente o carinho
      </span>
    </div>
  );
}
