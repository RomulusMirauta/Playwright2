// @ts-check
import { test, expect } from '@playwright/test';
import { createComment } from '../api/comments.api.js';

test('can send API request', async ({ page, request }) => {
  const comment = {
    title: 'I am in love with someone.',
    userId: 5,
    /* other post data */
  };
  const newComment = await createComment(request, comment);

  // Get a newly created comment
  const getComment = await request.get(`https://dummyjson.com/posts/` + newComment.id);
  // expect(getComment.ok()).toBeTruthy();

  // console.log(await getComment.json());

  expect(await getComment.json()).toMatchObject({ message: "Post with id '252' not found" });
});
