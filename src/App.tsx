import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Mili", "Lola", "Benja"];

  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado:", elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log("mostrando:", elemento);
  };
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
      {/* <List data={list} /> */}
    </Card>
  );
}

export default App;
