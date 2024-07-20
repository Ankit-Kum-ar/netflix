export const bgImage = "https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_API_KEY,
     }
}
export const MOVIECARD_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;
// console.log(OPENAI_KEY);