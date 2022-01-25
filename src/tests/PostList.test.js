import React from "react";
import renderer from "react-test-renderer";
import PostList from "../components/PostList";

describe("PostList", () => {
  const validProps = {
    posts: [
      {
        id: 1,
        tags: [],
      },
      {
        id: 2,
        tags: [],
      },
    ],
  };

  test("renders as expected", () => {
    const testRenderer = renderer
      .create(<PostList posts={validProps.posts} />)
      .toJSON();

    expect(testRenderer).toMatchSnapshot();
  });
});