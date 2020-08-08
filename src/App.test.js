import React from "react";
import "intersection-observer";
import {
  render,
  waitForElement,
  fireEvent,
  screen,
} from "@testing-library/react";
import App from "./App";

// Test para verificar si existe un elemento en una ruta asincrona (con code splitting)
test("renders without crashing", async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});

test("home work as expected", async () => {
  const { container } = render(<App />);
  const gifLink = await waitForElement(() =>
    container.querySelector(".Gif-link")
  );
  expect(gifLink).toBeVisible();
});

test("search form could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(button);

  const title = await screen.findByText("Matrix");
  expect(title).toBeVisible();
});
