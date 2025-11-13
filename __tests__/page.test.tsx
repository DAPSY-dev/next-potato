import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("page", () => {
  test("has heading", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { level: 1, name: "App" })
    ).toBeDefined();
  });
});
