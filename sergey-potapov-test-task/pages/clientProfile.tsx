import { Container, ListGroup } from "react-bootstrap";
import ListItem from "../components/ListItem";

interface MyClientProfile {
  toDoList: Array<any>;
}

function clientProfile({ toDoList }: MyClientProfile) {
  return (
    <Container>
      <h2>Недоступная незарегестрированному пользователю страница</h2>
      <h3>Список дел из предоставленного API</h3>
      <hr></hr>
      <ListGroup variant="flush">
        {toDoList &&
          toDoList.map((listItem) => (
            <ListItem
              key={listItem.id}
              title={listItem.title}
              userId={listItem.userId}
              id={listItem.id}
              completed={listItem.completed}
            />
          ))}
      </ListGroup>
    </Container>
  );
}

export default clientProfile;

clientProfile.getInitialProps = async () => {
  const responce = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  const toDoList = await responce.json();
  return {
    toDoList,
  };
};
