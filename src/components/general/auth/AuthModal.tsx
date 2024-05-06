import AuthForm from "@/components/general/auth/AuthForm";
import Modal from "@/components/ui/Modal";
import { useAuthModalContext } from "@/context/AuthModalContext";

type AuthModalProps = {};
export default function AuthModal(props: AuthModalProps) {
  const { open, handleClose, handeAction } = useAuthModalContext();
  return (
    <Modal
      title="Login to your account"
      actionButtonTitle="Log In"
      open={open}
      onClose={handleClose}
      onAction={handeAction}
    >
      <AuthForm />
    </Modal>
  );
}
