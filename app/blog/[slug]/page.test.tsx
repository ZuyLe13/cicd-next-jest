/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it('Dile must be in the document', () => {
  render(<Page params={Promise.resolve({ slug: "Test" })} />);
  expect(screen.getByText("Dile")).toBeInTheDocument();
});
