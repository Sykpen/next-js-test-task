import { ListGroup } from "react-bootstrap";

interface MyListItem {
  userId: number;
  title: string;
  completed: boolean;
  id: number;
}

function ListItem({ userId, title, completed, id }: MyListItem) {
  return (
    <>
      <ListGroup.Item variant={completed ? "success" : "secondary"}>
        Task №{id} - {title} for user {userId} is{" "}
        {completed ? "done" : "not done"}.
      </ListGroup.Item>
    </>
  );
}

export default ListItem;
