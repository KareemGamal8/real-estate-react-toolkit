import { useMediaQuery } from "@mantine/hooks";
import MainHeader from "./MainHeader";
import MobileHeader from "./MobileHeader";
import "./style.css";

export default function Header() {
  const media = useMediaQuery("(max-width:1000px)");

  return <>{media ? <MobileHeader /> : <MainHeader />}</>;
}
