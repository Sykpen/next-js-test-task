import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { changeLoginStatus } from "../../store/actions/clientActions";
import classes from "../../styles/header.module.css";

interface MyHeader {
  isLogged: boolean;
  changeLoginStatus: () => void;
  clientName: string;
}

function Header({ isLogged, changeLoginStatus, clientName }: MyHeader) {
  return (
    <Container>
      <nav className={classes.headerMain}>
        <div>
          <Link href={"/"}>
            <a>Главная</a>
          </Link>
        </div>
        {isLogged ? (
          <div>
            <Link href={"/clientProfile"}>
              <a>Личный кабинет</a>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
        <div className={classes.login}>
          {isLogged ? (
            <div className={classes.loginText}>Здравтвуйте, {clientName}</div>
          ) : (
            <div className={classes.loginText}>Войти в аккаунт:</div>
          )}
          {isLogged ? (
            <Link href={"/"}>
              <Button variant="primary" onClick={() => changeLoginStatus()}>
                Выйти
              </Button>
            </Link>
          ) : (
            <Link href={"/register"}>
              <Button variant="success">
                <a>Войти</a>
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLogged: state.client.isLoggedIn,
  clientName: state.client.clientData.name,
});

const mapDispatchToProps = { changeLoginStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
