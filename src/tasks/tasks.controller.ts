import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('Tasks')
export class TasksController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  @ApiOperation({ summary: 'Obtiene todas las tareas.' })
  getAllTasks(@Query() query: any) {
    //buscar en base de datos
    //hacer petición a otro backend
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Obtiene una tarea por id.' })
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.getTask(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea una nueva tarea.' })
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
