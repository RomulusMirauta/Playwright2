// @ts-check
import { test, expect } from '@playwright/test';
import { searchPosts } from '../api/search-posts.api.js';

test('can search posts by keyword', async ({ request }) => {
    const searchByKeyword = 'love'
    // const searchByKeyword = 'lovee'; // Intentionally using a keyword that will yield no results, to demonstrate handling of no results

    const searchResults = await searchPosts(request, searchByKeyword);

    console.log(await searchResults);

});
