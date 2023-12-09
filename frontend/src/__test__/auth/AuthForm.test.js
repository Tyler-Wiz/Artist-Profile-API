"use client";

import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AuthForm from "@/components/auth/AuthForm";
import ReduxProvider from "@/store/ReduxProvider";

const mockDispatchAction = jest.fn();

beforeEach(() => {
  render(
    <ReduxProvider>
      <AuthForm title="register" dispatchAction={mockDispatchAction} />
    </ReduxProvider>
  ); // Arrange
});

describe("AuthFrom", () => {
  // Render Block
  describe("Render", () => {
    test("should render the email input", () => {
      const inputEmail = screen.getByPlaceholderText("email address"); // Act
      expect(inputEmail).toBeInTheDocument(); // Assert
    });
    test("should render the password input", () => {
      const inputPassword = screen.getByPlaceholderText("password"); // Act
      expect(inputPassword).toBeInTheDocument(); // Assert
    });
    test("should render a disabled submit button", () => {
      const button = screen.getByRole("button"); // Act
      expect(button).toBeDisabled(); // Assert
    });
    test("should render a checkbox if register page", () => {
      const checkbox = screen.getByRole("checkbox"); // Act
      expect(checkbox).toBeInTheDocument(); // Assert
    });
  });

  // Behavior Block
  describe("Behavior", () => {
    test("should be able to add input", async () => {
      // Act
      const inputEmail = screen.getByPlaceholderText("email address");
      const inputPassword = screen.getByPlaceholderText("password");
      const checkbox = screen.getByRole("checkbox");
      await userEvent.type(inputEmail, "Tyler@gmail.com");
      await userEvent.type(inputPassword, "password");
      await userEvent.click(checkbox);
      // Assert
      expect(inputEmail).toHaveValue("Tyler@gmail.com");
      expect(inputPassword).toHaveValue("password");
      expect(checkbox).toBeChecked();
    });
    test("should enable the submit button when text is input", async () => {
      // Act
      const inputEmail = screen.getByPlaceholderText("email address");
      const inputPassword = screen.getByPlaceholderText("password");
      const checkbox = screen.getByRole("checkbox");
      await userEvent.type(inputEmail, "Tyler@gmail.com");
      await userEvent.type(inputPassword, "password");
      await userEvent.click(checkbox);
      const button = screen.getByRole("button");
      expect(button).toBeEnabled(); // ASSERT
    });

    // test("should empty the text input when submitted", async () => {
    //   // Act
    //   const inputEmail = screen.getByPlaceholderText("email address");
    //   const inputPassword = screen.getByPlaceholderText("password");
    //   const checkbox = screen.getByRole("checkbox");
    //   await userEvent.type(inputEmail, "Tyler@gmail.com");
    //   await userEvent.type(inputPassword, "password");
    //   await userEvent.click(checkbox);
    //   const button = screen.getByRole("button", {
    //     name: "Login",
    //   });
    //   await userEvent.click(button);
    //   // Assert
    //   expect(button).not.toBeEnabled();
    //   waitFor(() => {
    //     expect(inputEmail).toHaveValue("");
    //     expect(inputPassword).toHaveValue("");
    //     expect(checkbox).not.toBeChecked();
    //   });
    // });

    // test("should submit the form", async () => {
    //   screen.getByRole("form", { name: "auth-form" }).onsubmit =
    //     handleOnSubmitMock;
    //   // Act
    //   const inputEmail = screen.getByPlaceholderText("email address");
    //   const inputPassword = screen.getByPlaceholderText("password");
    //   const checkbox = screen.getByRole("checkbox");
    //   await userEvent.type(inputEmail, "Tyler@gmail.com");
    //   await userEvent.type(inputPassword, "password");
    //   await userEvent.click(checkbox);
    //   const button = screen.getByRole("button", {
    //     name: "Login",
    //   });
    //   await userEvent.click(button);
    //   // Assert
    //   expect(handleOnSubmitMock).toHaveBeenCalled();
    // });
  });
});
