const MAIN_URI = 'http://localhost:3001';
const AUTH_TOKEN = '1827-asdkjna-32r34-asd3r244'
const headers = {
    'Authorization':  AUTH_TOKEN
}

export const getCategories = () => {
    return fetch(`${MAIN_URI}/categories`, {headers}).then(res => res.json());
}

export const getPosts = (id = '') => {
    return fetch(`${MAIN_URI}/posts/${id}`, {headers}).then(res => res.json());
}

export const getPostsByCategory = (category) => {
    return fetch(`${MAIN_URI}/${category}/posts`, {headers}).then(res => res.json());
}

export const addPost = ({id, title, timestamp, body, author, category}) => {
    return fetch(`${MAIN_URI}/posts`, {headers, method: 'POST', body: JSON.stringify({
        id,
        title,
        timestamp,
        body,
        author,
        category
    })})
        .then(res => res.json())
}