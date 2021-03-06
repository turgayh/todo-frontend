const HOST = process.env.REACT_APP_HOST
const PORT = process.env.REACT_APP_PORT ?? ""
const CREATE_TASK = HOST + PORT + "/v1/todo/create";
const GET_ALL_TASK = HOST + PORT + "/v1/todo/get-all";

module.exports = {
    CREATE_TASK,
    GET_ALL_TASK,
    HOST, PORT
}