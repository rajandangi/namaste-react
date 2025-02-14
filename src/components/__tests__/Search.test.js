import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import REST_LIST_DATA from "../__mocks__/resListData.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

// Mock Fetch API globally
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(REST_LIST_DATA),
  });
});

const BodyWrapper = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Provider store={appStore}>
        <Body />
      </Provider>
    </BrowserRouter>
  );
};

describe("Body Component", () => {
  beforeEach(() => {
    // clear mock calls before each test
    fetch.mockClear();
  });

  it("Should load restaurant list after API call", async () => {
    await act(async () => {
      render(<BodyWrapper />);
    });
    // Confirm all restaurants are rendered
    const restaurantCards = await screen.getAllByTestId("restaurant-card");
    expect(restaurantCards.length).toBe(REST_LIST_DATA.length);
  });

  it("Should search restaurant list for burger text input", async () => {
    await act(async () => {
      render(<BodyWrapper />);
    });

    // Find search input and type "burger"
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: "burger" } });

    // Find search button and click
    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);

    const filteredRes = screen.getByRole("heading", { name: "Burger King" });
    expect(filteredRes).toBeInTheDocument();

    // Confirm only one restaurant is rendered
    const restaurantCards = screen.getAllByTestId("restaurant-card");
    expect(restaurantCards.length).toBe(1);
  });

  it("Should filter top rated restaurant", async () => {
    await act(async () => {
      render(<BodyWrapper />);
    });

    // Check all the restaurants are rendered initially
    expect(screen.getAllByTestId("restaurant-card").length).toBe(REST_LIST_DATA.length);

    // Find filter button and click
    const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedButton);

    // Check only top rated restaurants are rendered
    expect(screen.getAllByTestId("restaurant-card").length).toBe(3);
  });
});
