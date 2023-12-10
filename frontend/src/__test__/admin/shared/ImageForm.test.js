import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import UploadForm from "@/components/admin/shared/ImageForm";
import ReduxProvider from "@/store/ReduxProvider";

describe("Upload Image", () => {
  const MockImageSubmit = jest.fn();
  const image =
    "https://tooxclusive-artist-profile.s3.eu-west-3.amazonaws.com/12-12-burna_boy__love%2C_damini.png";
  beforeEach(() => {
    render(
      <ReduxProvider>
        <UploadForm handleImageSubmit={MockImageSubmit} image={image} />
      </ReduxProvider>
    );
  });

  it("should render the image form", () => {
    const input = screen.getByPlaceholderText("image upload");
    expect(input).toBeInTheDocument();
  });

  it("should call handleImageSubmit when a file is selected", () => {
    const input = screen.getByPlaceholderText("image upload");
    const file = new File(["file contents"], "image.jpg", {
      type: "text/plain",
    });
    fireEvent.change(input, { target: { files: [file] } });
    expect(MockImageSubmit).toHaveBeenCalled();
  });

  it("should render the image form", async () => {
    const input = screen.getByPlaceholderText("image upload");
    const file = new File(["file contents"], "image.jpg", {
      type: "text/plain",
    });
    fireEvent.change(input, { target: { files: [file] } });
    const imagePreview = await screen.findByLabelText("image-preview");
    expect(imagePreview).toBeInTheDocument();
  });
});
