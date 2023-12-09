import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Nav from "@/components/admin/shared/Nav";
import ReduxProvider from "@/store/ReduxProvider";

describe("Nav", () => {
  beforeEach(() => {
    render(
      <ReduxProvider>
        <Nav />
      </ReduxProvider>
    );
  });
  describe("Render", () => {
    test("", () => {});
  });
});
