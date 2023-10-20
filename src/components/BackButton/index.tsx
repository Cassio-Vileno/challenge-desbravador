import { useRouter } from "next/navigation";
import BackIcon from "../svg/backIcon";
import { Button } from "./styles";

function BackButton() {
  const router = useRouter();
  const handleNavigate = () => {
    router.back();
  };

  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  );
}

export default BackButton;
