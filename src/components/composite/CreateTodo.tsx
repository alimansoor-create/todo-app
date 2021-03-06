import React, {
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { add } from "$/slices/todosSlice";
import RemoveTodo from "$/components/atomic/RemoveTodo";
import TodoStatus from "$/components/atomic/TodoStatus";
import TodoText from "$/components/atomic/TodoText";
import styled from "styled-components";
import { isDesktop, isMobile } from "react-device-detect";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  background-color: ${(props) => props.theme.background.todo};
  border-radius: 0.2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  transition: 200ms ease;
`;

const CreateTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    text && dispatch(add({ text }));
  };

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    if (isMobile && evt.target.value.slice(-1) === "\n") {
      addTodo();
      setText("");
    } else {
      setText(evt.target.value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (evt) => {
    if (isDesktop) {
      if (!evt.shiftKey && evt.key.toLowerCase() === "enter") {
        addTodo();
        setText("");
        evt.preventDefault();
      }
    }
  };

  const handleClearText: MouseEventHandler<HTMLButtonElement> = () => {
    setText("");
  };

  return (
    <Wrapper>
      <TodoStatus />
      <TodoText
        text={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
      <RemoveTodo show={!!text} onClick={handleClearText} />
    </Wrapper>
  );
};

export default CreateTodo;
