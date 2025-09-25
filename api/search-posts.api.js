import { expect } from '@playwright/test';

export async function searchPosts(apiClient, searchByKeyword = '', postObject) {
    // Search posts
    const searchResults = await apiClient.get(`https://dummyjson.com/posts/search?q=${searchByKeyword}`, {
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(postObject)
    });
    // expect(searchResults.ok()).toBeTruthy();

    // Verify response
    console.log(await searchResults.json());

    // Verifies that the response actually contains posts
    const searchResultsJson = await searchResults.json();
    expect(Array.isArray(searchResultsJson.posts)).toBeTruthy();

    if (searchResultsJson.posts.length === 0) {
        console.warn(`No posts were found by using the keyword: "${searchByKeyword}"`);
    } else {
        expect(searchResultsJson.posts.length).toBeGreaterThan(0);
        // Assert at least one post contains the keyword (case-insensitive)
        const containsKeyword = searchResultsJson.posts.some(
            post =>
                (post.title && post.title.toLowerCase().includes(searchByKeyword)) ||
                (post.body && post.body.toLowerCase().includes(searchByKeyword))
        );
        expect(containsKeyword).toBeTruthy();
    }

    return searchResultsJson;
}
