import Head from "next/head";
import MyCard from "../components/Card";
import { Container } from "react-bootstrap";
import classes from "../styles/homePage.module.css";

interface MyHome {
  photos: Array<any>;
}

function Home({ photos }: MyHome) {
  return (
    <div>
      <Head>
        <title>Sergey Potapov | Test task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Главная страница с общедоступным контентом</h1>
        <h3>
          Пример добавления элементов с картинками со "своего" сервера (
          json-server )
        </h3>
        <hr></hr>
        <div className={classes.flexContainer}>
          {photos &&
            photos.map((photo) => (
              <MyCard
                key={photo.id}
                title={photo.title}
                url={photo.url}
                id={photo.id}
              />
            ))}
        </div>
      </Container>
    </div>
  );
}

Home.getInitialProps = async () => {
  const responce = await fetch("http://localhost:4200/photos");
  const photos = await responce.json();
  return {
    photos,
  };
};

export default Home;
