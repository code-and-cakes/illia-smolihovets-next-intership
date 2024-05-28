import LogInForm from "@/components/general/auth/LogInForm";
import Modal from "@/components/ui/Modal";
import { useAuthModalContext } from "@/context/AuthModalContext";

export default function LogInModal() {
  const { openLogin, handleCloseLogin, handeActionLogin } =
    useAuthModalContext();
  return (
    <Modal
      title="Login to your account"
      open={openLogin}
      onClose={handleCloseLogin}
      // onAction={handeActionLogin}
    >
      <LogInForm />
    </Modal>
  );
}
