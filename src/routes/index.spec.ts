/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/svelte";

import Index from "./index.svelte";

/**
 * An example test suite outlining the usage of
 * `describe()`, `beforeEach()`, `test()` and `expect()`
 *
 * @see https://jestjs.io/docs/getting-started
 * @see https://github.com/testing-library/jest-dom
 */

describe("Index", () => {
  describe("once component rendered", () => {
    render(Index);

    test("should show heading", () => {
      expect(screen.getByText(/Supabase/)).toBeInTheDocument();
    });
  });
});
