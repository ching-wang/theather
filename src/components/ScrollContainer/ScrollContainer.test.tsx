import React from "react";
import ScrollContainer from "./ScrollContainer";
import renderer from "react-test-renderer";

describe(ScrollContainer.name, () => {
    it("renders", () => {
        const tree = renderer
            .create(
                <ScrollContainer>
                    <div>
                        <h1>
                            Hello, world!
                        </h1>
                    </div>
                    <div>
                        <h2>Hi!</h2>
                    </div>
                </ScrollContainer>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
