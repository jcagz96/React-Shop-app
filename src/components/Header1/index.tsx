import React, { useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { StoreState } from "../../store/createStore";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  enableDarkTheme,
  enableLightTheme,
} from "../../store/modules/theme/actions";

const Header1: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);

  const { loadingSignInRequest, username } = useSelector((state: StoreState) =>
    state.auth
  );
  const { carElements } = useSelector((state: StoreState) => state.car);

  const { dark } = useSelector((state: StoreState) => state.theme);

  const dispatch = useDispatch();

  function toggleTheme(): void {
    if (dark) {
      dispatch(enableLightTheme());
    } else {
      dispatch(enableDarkTheme());
    }
  }

  const url = "";

  return (
    <>
      <Container>
        <div>
          <a href="/">
            <img
              src={"https://cdn-media-1.freecodecamp.org/images/1*BpaqVMW2RjQAg9cFHcX1pw.png"}
              alt="logo"
            />
          </a>
        </div>

        <div className="options">
          <a href={url}>Inicio</a>
          <a href={url}>Sobre</a>
          <a href={url}>Documentação</a>
          <a href={url}>Contactos</a>
        </div>

        <div className="rightInfos">
          <div className="infos">
            <h6>Bem vindo, {username}</h6>
            <a href="/cart">
              <h6>Carrinho: {carElements.length}</h6>
            </a>
          </div>
          <Switch
            onChange={toggleTheme}
            checked={dark}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.1, colors.primary)}
            onColor={colors.secundary}
          />
        </div>
      </Container>
    </>
  );
};

export default Header1;
