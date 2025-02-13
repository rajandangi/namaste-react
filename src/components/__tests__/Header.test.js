import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header.jsx";
import appStore from "../../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component with a Login button", () => {
  render(
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // get the button element
  const button = screen.getByText("Login");

  // Assert the button is in the document
  expect(button).toBeInTheDocument();
});

it("Should  change login button to logout when clicked", () => {
  render(
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  // click the login button
  fireEvent.click(loginButton);

  // get the logout button
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  // Assert the logout button is in the document
  expect(logoutButton).toBeInTheDocument();
});
