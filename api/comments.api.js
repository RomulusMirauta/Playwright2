import { expect } from '@playwright/test';

export async function createComment(apiClient, commentObject) {
    // Create new comment
    const newComment = await apiClient.post(`https://dummyjson.com/posts/add`, {
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(commentObject)
    });
    // expect(newComment.ok()).toBeTruthy();

    // Verify response
    // console.log(await newComment);
    console.log(await newComment.json());

    const newCommentJson = await newComment.json();
    expect(newCommentJson).toMatchObject({
        id: 252,
        title: 'I am in love with someone.',
        userId: 5
    });

    return newCommentJson;
}
