import { Card } from "react-bootstrap";
import classes from "../../styles/card.module.css";

interface MyCardProps {
  id: number;
  title: string;
  url: string;
}

function MyCard({ id, title, url }: MyCardProps) {
  return (
    <>
      <Card className={classes.card}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard;
