import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`La tarea con id: ${id} no se encontró.`);
    }

    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    return 'Actualizando tareas';
  }

  deleteTask() {
    return 'Eliminando tareas';
  }

  updateTaskStatus() {
    return 'Actualizando estatus tarea';
  }
}
