// @ts-check
import { test, expect } from '@playwright/test';
import { searchPosts } from '../api/search-posts.api.js';

test('can search posts by keyword', async ({ request }) => {
    const searchByKeyword = 'lovee';

    const searchResults = await searchPosts(request, searchByKeyword);

    console.log(await searchResults);

});
