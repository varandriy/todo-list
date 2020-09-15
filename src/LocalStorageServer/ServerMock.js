import { wait } from "../utils";

let id = 0;

class ServerMock {
    async getTasks() {
        await wait(500);
        const tasksString = localStorage.getItem('tasks') || '[]';
        return JSON.parse(tasksString);

    }
    async addTask(taskText) {
        const task = { id: ++id, text: taskText }
        await wait(1000);
        const tasks = await this.getTasks();
        const newTasks = [...tasks, task];
        const newTasksString = JSON.stringify(newTasks);
        localStorage.setItem('tasks', newTasksString);
        return newTasks;
    }
    async editTask(task) {
        await wait(300);
        const tasks = await this.getTasks();
        const newTasks = tasks.map(oneTask => oneTask.id === task.id ? { ...oneTask, ...task } : oneTask);
        const newTasksString = JSON.stringify(newTasks);
        localStorage.setItem('tasks', newTasksString);
        return newTasks;
    }
    async deleteTask(id) {
        await wait(1000);
        const tasks = await this.getTasks();
        const newTasks = tasks.filter(oneTask => oneTask.id !== id);
        const newTasksString = JSON.stringify(newTasks);
        localStorage.setItem('tasks', newTasksString);
        return newTasks;
    }
}
export const serverMock = new ServerMock();