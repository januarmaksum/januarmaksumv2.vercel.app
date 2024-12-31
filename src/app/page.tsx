import CE_Container from "./$element/client.container";
import CE_LeftAside from "./$element/client.left.aside";
import CE_MainContent from "./$element/client.main";
import CE_RightAside from "./$element/client.right.aside";

export default function Home() {
  return (
    <CE_Container>
      <CE_LeftAside />
      <CE_MainContent />
      <CE_RightAside />
    </CE_Container>
  );
}
