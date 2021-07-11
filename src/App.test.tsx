import "@testing-library/jest-dom";

import React from "react";
import { render, screen, queryByAttribute } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("Basic checking for some of the required elements", () => {
  const getById = queryByAttribute.bind(null, "id");

  const dom = render(<App />);
  const castButton = screen.getByText("Cast");
  expect(castButton).toBeInTheDocument();

  const episodesButton = screen.getByText("Episodes");
  expect(episodesButton).toBeInTheDocument();

  const filteringButton = screen.getByText("Filtering");
  expect(filteringButton).toBeInTheDocument();

  //I click on the filteringButton and should see a popup

  act(() => {
    filteringButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  //Now I should be able to find the Update text on the button
  const updateButton = screen.getByText("Update");

  expect(updateButton).toBeInTheDocument();
  // Im gonna select Pakistan and the expect to not find any Us country
  // // on the screen
  const pakistanCheckbox = getById(dom.container, "country4");
  expect(pakistanCheckbox).toBeInTheDocument();

  if (pakistanCheckbox !== null) {
    act(() => {
      pakistanCheckbox.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
      updateButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  }
  
  //etc.. 

});
