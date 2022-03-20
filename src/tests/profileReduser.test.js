import React from "react";
import profileReducer, { addPostAC, deletePostAC } from "../redux/profileReducer";

const state = {
    posts: [
        {
            id: 1,
            text: 'Hi',
            likes: 10
        },
        {
            id: 2,
            text: 'I am Ilnur',
            likes: 20
        }
    ]
}
const action = addPostAC("Ilnur is good!")

test('new post should be added', () => {
    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});
test('message of new post should be correct', () => {
    const newState = profileReducer(state, action)

    expect(newState.posts[2].text).toBe("Ilnur is good!")
});
test('after deleting length of messages should be decrement', () => {
    const actionDelete = deletePostAC(1)
    const newState = profileReducer(state, actionDelete)

    expect(newState.posts.length).toBe(1)
});
test("after deleting length shouldn't be decrement id id is incorrect", () => {
    const actionDelete = deletePostAC(1000)
    const newState = profileReducer(state, actionDelete)

    expect(newState.posts.length).toBe(2)
});