import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { EErrors } from 'src/common/constants/errors.enum';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { TODO_TAG } from 'src/common/constants/tags';
import { CreateTodoReqDto } from './dto/create-todo-req.dto';
import { TodoService } from './todo.service';
import { User } from 'src/common/decorators/user.decorator';
import { UserEntity } from 'src/services/repositories/user/entities/user.entity';
import { QueryGetTodoReqDto } from './dto/get-todo-req.dto';
import { CommonPathReqDto } from 'src/common/dto/common-path-req.dto';
import { GetTodosResDto } from 'src/modules/todos/dto/get-todos-res.dto';
import { UpdateTodoReqDto } from './dto/update-todo-req.dto';
import { ComposeAuthDecorator } from 'src/common/decorators/compose-auth.decorator';

@ApiTags(TODO_TAG)
@Controller(TODO_TAG)
@ComposeErrorsDecorator()
@ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  /**
   * get todos
   * @returns {Promise<GetTodosResDto>}
   */
  @Get()
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'get todos',
    operationId: OperationIds.TODO_GET,
  })
  @ApiCreatedResponse({
    status: 200,
    description: 'OK',
    type: GetTodosResDto,
  })
  async get(
    @User() user: UserEntity,
    @Query() query: QueryGetTodoReqDto,
  ): Promise<GetTodosResDto> {
    return await this.todoService.get(user, query);
  }

  /**
   * create todo
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post()
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'create todo',
    operationId: OperationIds.TODO_CREATE,
  })
  @ApiCreatedResponse({
    status: 200,
    description: 'OK',
    type: CommonSuccessResDto,
  })
  async create(
    @Body() createTodoReqDto: CreateTodoReqDto,
    @User() user: UserEntity,
  ): Promise<CommonSuccessResDto> {
    return await this.todoService.create(user, createTodoReqDto);
  }

  /**
   * update todo
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Patch('/:id')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'update todo',
    operationId: OperationIds.TODO_UPDATE,
  })
  @ApiCreatedResponse({
    status: 200,
    description: 'OK',
    type: CommonSuccessResDto,
  })
  async update(
    @Body() updateTodoReqDto: UpdateTodoReqDto,
    @User() user: UserEntity,
    @Param() { id }: CommonPathReqDto,
  ): Promise<CommonSuccessResDto> {
    return await this.todoService.update(id, user, updateTodoReqDto);
  }

  /**
   * delete todo
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Delete('/:id')
  @ComposeAuthDecorator()
  @ApiOperation({
    description: 'delete todo',
    operationId: OperationIds.TODO_DELETE,
  })
  @ApiCreatedResponse({
    status: 200,
    description: 'OK',
    type: CommonSuccessResDto,
  })
  async delete(
    @User() user: UserEntity,
    @Param() { id }: CommonPathReqDto,
  ): Promise<CommonSuccessResDto> {
    return await this.todoService.delete(user, id);
  }
}
