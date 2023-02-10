import Container from "./style";

export default function TextComponent({children}: {children?: string;}) {
  return (
    <Container dangerouslySetInnerHTML={{ __html: `${children}` }}/>
  )
}