import { act, fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import RES_CARD_MOCK_DATA from "../__mocks__/resCardMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RES_CARD_MOCK_DATA),
  });
});

const ResMenuWrapper = () => {
  return (
    <Provider store={appStore}>
      <RestaurantMenu />
      <Cart />
    </Provider>
  );
};

describe("Adding item to the cart", () => {
  it("Should add item to the cart", async () => {
    await act(async () => {
      render(<ResMenuWrapper />);
    });

    // Find Most Popular Menu and click
    const menuTitle = screen.getAllByTestId("menu-title");
    fireEvent.click(menuTitle[1]);

    // Check items on the cart before adding
    expect(screen.queryByTestId("cart-item")).not.toBeInTheDocument();
    

    // Find Add to Cart button and click
    const addToCartButton = screen.getAllByTestId("add-to-cart");
    fireEvent.click(addToCartButton[0]);
    fireEvent.click(addToCartButton[1]);

    // Confirm item is added to the cart
    const cartItems = screen.getAllByTestId("cart-item");
    expect(cartItems.length).toBe(2);
  });
});
