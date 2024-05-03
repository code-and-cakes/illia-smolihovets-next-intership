import AuthForm from "@/components/general/AuthForm";
import Modal from "@/components/ui/Modal";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
  onAction: () => void;
};

export default function AuthModal(props: AuthModalProps) {
  return (
    <Modal
      title="Login to your account"
      actionButtonTitle="Log In"
      className="grow"
      open={props.open}
      onClose={props.onClose}
      onAction={props.onAction}
    >
      <AuthForm />
    </Modal>
  );
}
