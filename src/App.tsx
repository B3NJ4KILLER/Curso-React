import Card, { CardBody } from "./components/Card";
import List from "./components/List";
// * Truthy
// * Falsy -->  0, "", null, undefined, NaN, false

function App() {
  const list: string[] = [];

  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado:", elemento);
  };
  // const handleSelect2 = (elemento: string) => {
  //   console.log("mostrando:", elemento);
  // };
  return (
    <Card>
      {/* {"" && "string vacio"}
      {undefined && "indefinido"}
      {null && "nulo"}
      {false && "falso"}
      {0 && "numero cero"} */}
      {list.length !== 0 && "mi lista"}
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
      {/* <List data={list} onSelect={handleSelect2} /> */}
      {/* <List data={list} /> */}
    </Card>
  );
}

export default App;
