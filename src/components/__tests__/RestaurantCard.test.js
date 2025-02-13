import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props", () => {
  // Render the component
  render(<RestaurantCard data={MOCK_DATA.data} />);

  // Query the element
  const name = screen.getByText(MOCK_DATA.data.name);

  // Assertion
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with props and promoted label", () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  render(<PromotedRestaurantCard data={MOCK_DATA.data} />);

  // Query the element
  const promotedLabel = screen.getByText("Promoted", { selector: "label" });
  
  // Assertion
  expect(promotedLabel).toBeInTheDocument();
});
