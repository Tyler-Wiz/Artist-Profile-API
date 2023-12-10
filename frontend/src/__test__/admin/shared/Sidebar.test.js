import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "@/components/admin/shared/Sidebar";
import ReduxProvider from "@/store/ReduxProvider";

describe("Sidebar", () => {
  beforeEach(() => {
    render(
      <ReduxProvider>
        <Sidebar />
      </ReduxProvider>
    );
  });

  describe("Render", () => {
    it("should render the sidebar", () => {
      const sidebar = screen.getByLabelText("sidebar");
      expect(sidebar).toBeInTheDocument();
    });
    it("should render the sidebar menu", () => {
      const menuIcon = screen.getAllByLabelText("menu-icon");
      const menuText = screen.getAllByLabelText("menu-text");
      expect(menuText.length).toBeGreaterThan(0);
      expect(menuIcon.length).toBeGreaterThan(0);
    });

    it("should render the sidebar sub-menu", () => {
      const subMenuIcon = screen.getAllByLabelText("sub-menu-icon");
      const subMenuText = screen.getAllByLabelText("sub-menu-text");
      expect(subMenuText.length).toBeGreaterThan(0);
      expect(subMenuIcon.length).toBeGreaterThan(0);
    });
  });
});
