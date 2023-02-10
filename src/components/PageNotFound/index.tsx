import GridContent from "../GridContent";

export default function PageNotFound() {
  return (
    <GridContent
      title="Error 404"
      html="<p>A páfina que você busca não foi encontrada. <a href='/'>Clique para voltar</a></p>"
    />
  );
}
