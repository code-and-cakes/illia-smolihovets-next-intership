import SignUpForm from "@/components/general/auth/SignUpForm";
import Modal from "@/components/ui/Modal";
import { useAuthModalContext } from "@/context/AuthModalContext";

export default function SignUpModal() {
  const { openSignUp, handleCloseSignUp, handeActionSignUp } =
    useAuthModalContext();
  return (
    <Modal
      title="Create new account"
      actionButtonTitle="Sign Up"
      open={openSignUp}
      onClose={handleCloseSignUp}
      onAction={handeActionSignUp}
    >
      <SignUpForm />
    </Modal>
  );
}
