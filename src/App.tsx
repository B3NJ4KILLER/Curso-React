import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";
// * Truthy
// * Falsy -->  0, "", null, undefined, NaN, false

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list: string[] = ["benja", "lola", "mili"];

  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado:", elemento);
  };
  // const handleSelect2 = (elemento: string) => {
  //   console.log("mostrando:", elemento);
  // };

  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );
  return (
    <Card>
      {/* {"" && "string vacio"}
      {undefined && "indefinido"}
      {null && "nulo"}
      {false && "falso"}
      {0 && "numero cero"} */}
      {/* {list.length !== 0 && "mi lista"} */}
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {contenido}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>

      {/* <List data={list} onSelect={handleSelect} /> */}
      {/* <List data={list} onSelect={handleSelect2} /> */}
      {/* <List data={list} /> */}
    </Card>
  );
}

export default App;
