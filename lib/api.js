import dotenv from 'dotenv';
dotenv.config();

const API_URL = 'https://wpbg.bgroup.com.ar/wp-json/wp/v2/';

// Gets post by API URL and given path
export async function fetchAPI(path) {
    const res = await fetch(`${API_URL}${path}`);
    const json = await res.json();

    return json;
}

export async function getPosts() {
    let posts = await fetchAPI('posts?per_page=50&_embed');
    return posts;
}
