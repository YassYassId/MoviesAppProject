import axios from 'axios';

export default axios.create({
    baseURL:'https://8e46-41-248-207-35.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});