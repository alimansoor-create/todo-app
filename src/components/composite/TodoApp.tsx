import React from "react";
import ToggleMode from "$/components/atomic/ToggleMode";
import CreateTodo from "$/components/composite/CreateTodo";
import TodoList from "$/components/composite/TodoList";
import styled from "styled-components";

const App = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoint.tablet}) {
    gap: 2.2rem;
  }
`;

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.4rem;
  letter-spacing: 0.4em;

  @media (min-width: ${(props) => props.theme.breakpoint.tablet}) {
    font-size: 2.2rem;
  }
`;

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppFooter = styled.small`
  align-self: center;
  color: ${(props) => props.theme.text.secondary.default};
  font-size: 0.8rem;
  transition: 200ms ease;
`;

const TodoApp = () => {
  return (
    <App>
      <AppHeader>
        <Logo>TODO</Logo>
        <ToggleMode />
      </AppHeader>
      <AppBody>
        <CreateTodo />
        <TodoList />
      </AppBody>
      <AppFooter>Drag and drop to reorder list</AppFooter>
    </App>
  );
};

export default TodoApp;
