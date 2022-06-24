import "./styles.css";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export default function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        {/* <Resource name="users" list={ListGuesser} /> */}
        {/* <Resource name="todos" list={ListGuesser} /> */}
      </Admin>
    </div>
  );
}
