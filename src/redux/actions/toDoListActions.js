import { serverMock } from '../../LocalStorageServer/ServerMock'

export const SET_TASKS = "SET_TASKS"


export const setTasks = (data) => ({ type: SET_TASKS, payload: data });



export const addTask = (data) => {
    return async (dispatch) => {
        const tasks = await serverMock.addTask(data)
        dispatch({ type: SET_TASKS, payload: tasks })
    }
};

export const editTask = (data) => {
    return async (dispatch) => {
        const tasks = await serverMock.addTask(data)
        dispatch({ type: SET_TASKS, payload: tasks })
    }
};

export const deleteTask = (id) => {
    return async (dispatch) => {
        const tasks = await serverMock.deleteTask(id)
        dispatch({ type: SET_TASKS, payload: tasks })
    }
};

export const fetchTasks = () =>{
    return async (dispatch) => {
        const tasks = await serverMock.getTasks();
        dispatch({type: SET_TASKS, payload: tasks})
    }
}