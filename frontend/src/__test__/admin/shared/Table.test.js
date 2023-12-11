import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Table from "@/components/admin/shared/Table";
import ReduxProvider from "@/store/ReduxProvider";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      refresh: () => null,
    };
  },
}));
const headers = ["title", "released", "artist"];
const additionalHeaders = ["test1", "test2", "test3"];
const testData = [
  {
    title: "City",
    released: "2023",
    artist: "Burna Boy",
  },
];

beforeEach(() => {
  render(
    <ReduxProvider>
      <Table
        headers={headers}
        additionalHeaders={additionalHeaders}
        buttonLink="/examples"
        data={testData}
      />
    </ReduxProvider>
  );
});

describe("Table", () => {
  it("should render a table", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("renders table rows based on provided data", () => {
    testData.map((item) => {
      const titleCell = screen.getByText(item.title);
      const releasedDateCell = screen.getByText(item.released);
      const artistCell = screen.getByText(item.artist);

      expect(titleCell).toBeInTheDocument();
      expect(releasedDateCell).toBeInTheDocument();
      expect(artistCell).toBeInTheDocument();
    });
  });
});
