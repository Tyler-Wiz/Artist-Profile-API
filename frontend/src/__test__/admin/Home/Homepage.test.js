import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReduxProvider from "@/store/ReduxProvider";
import Homepage from "@/components/admin/Home/Homepage";
import userEvent from "@testing-library/user-event";

describe("Homepage", () => {
  const songs = [
    {
      title: "Last Last",
      song_image:
        "https://tooxclusive-artist-profile.s3.eu-west-3.amazonaws.com/12-12-burna_boy__love%2C_damini.png",
      url: "last-last",
      "released date": "2022",
      artist: "Burna Boy",
      created_at: "2023-12-09",
    },
  ];

  beforeEach(() => {
    render(
      <ReduxProvider>
        <Homepage title="dashboard" songs={songs} artists={songs} />
      </ReduxProvider>
    );
  });
  describe("Render", () => {
    test("should render dashboard heading", async () => {
      // Act
      const header = screen.getByLabelText("heading");
      // Assert
      expect(header).toBeInTheDocument();
    });

    test("should render information tab", () => {
      // Act
      const infoTab = screen.getByLabelText("info-tab");
      // Assert
      expect(infoTab).toBeInTheDocument();
    });

    test("should render a learn more button", () => {
      // Act
      const button = screen.getByRole("button", {
        name: "Learn More",
      });
      // Assert
      expect(button).toBeInTheDocument();
    });

    test("should render a table and display songs", () => {
      // Act
      const table = screen.getByRole("table");
      // Assert
      songs.map((song) => {
        const title = screen.getByText(song.title);
        const date = screen.getByText(song.created_at);
        const artist = screen.getByText(song.artist);

        expect(artist).toBeInTheDocument();
        expect(date).toBeInTheDocument();
        expect(title).toBeInTheDocument();
      });
      expect(table).toBeInTheDocument();
    });

    test("should render input and textarea and button", () => {
      // Act
      const input = screen.getByPlaceholderText("title");
      const textarea = screen.getByPlaceholderText("content");
      const button = screen.getByRole("button", {
        name: "Publish",
      });
      // Assert
      expect(input).toBeInTheDocument();
      expect(textarea).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("behavior", () => {
    test("should be able to add input", async () => {
      // Act
      const input = screen.getByPlaceholderText("title");
      const textarea = screen.getByPlaceholderText("content");
      await userEvent.type(input, "hello world");
      await userEvent.type(textarea, "Let make it work");
      // Assert
      expect(input).toHaveValue("hello world");
      expect(textarea).toHaveValue("Let make it work");
    });
    test("should empty the text input when submitted", async () => {
      // Act
      const input = screen.getByPlaceholderText("title");
      const textarea = screen.getByPlaceholderText("content");
      await userEvent.type(input, "hello world");
      await userEvent.type(textarea, "Let make it work");
      const button = screen.getByRole("button", {
        name: "Publish",
      });

      await userEvent.click(button);

      // Assert
      waitFor(() => {
        expect(input).toHaveValue("");
        expect(textarea).toHaveValue("");
      });
    });
  });
});
