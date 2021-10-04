import React from "react";
import Card from "./Card";
import { Show } from "../../types";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe(Card.name, () => {
  it("renders", () => {
    const mockShow: Show = {
      id: 1,
      url: "http://hellothere.com",
      name: "foobar",
      genres: [],
      language: "",
      runtime: 123,
      rating: {
        average: "4",
      },
      number: 1,
      status: "good",
      summary: "foobar",
      image: {
        medium: "foobar.com/img.jpg",
        original: "foobar.com/img.jpg",
      },
    };
    const tree = renderer
      .create(
        <BrowserRouter>
          <Card show={mockShow} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
