import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Container from "./style";

export default function GoTop() {
  return (
    <Container href="#" aria-label="Go to top" title="Go to top">
      <ChevronUpIcon />
    </Container>
  )
}