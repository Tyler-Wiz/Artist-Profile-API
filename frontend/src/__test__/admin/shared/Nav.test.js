import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Nav from "@/components/admin/shared/Nav";
import ReduxProvider from "@/store/ReduxProvider";

describe("Nav", () => {
  const data = [
    { name: "Song", path: "/admin/song/post-new" },
    { name: "Artist", path: "/admin/artist/post-new" },
    { name: "Album", path: "/admin/album/post-new" },
    { name: "Media", path: "/" },
    { name: "User", path: "/" },
  ];

  beforeEach(() => {
    render(
      <ReduxProvider>
        <Nav />
      </ReduxProvider>
    );
  });
  describe("Render", () => {
    it("should render link to homepage", () => {
      const linkToHome = screen.getByLabelText("home-link");
      expect(linkToHome).toBeInTheDocument();
    });
    it("should render create new post section", () => {
      const createNew = screen.getByLabelText("create-new-post");
      expect(createNew).toBeInTheDocument();
    });
    it("should render link to user profile", () => {
      const user = screen.getByLabelText("user");
      expect(user).toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("should display create new dropdown menu when clicked", async () => {
      const createNew = screen.getByLabelText("create-new-post");
      await userEvent.click(createNew);

      data.map(async (item) => {
        const name = await screen.findByText(item.name);
        const path = await screen.findByText(item.path);
        expect(name).toBeInTheDocument();
        expect(path).toBeInTheDocument();
      });
    });
  });
});
