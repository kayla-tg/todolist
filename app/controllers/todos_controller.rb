class TodosController < ApplicationController
  def index
    @todos = Todo.order(:created_at)
  end

  def create
    @todo = Todo.create(todo_params)
    redirect_to todos_path if @todo.valid?
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      redirect_to todos_path
    end
  end

  def toggle_complete
    @todo = Todo.find(params[:id])
    @todo.update(completed: !@todo.completed)
    redirect_to todos_path
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    redirect_to todos_path
  end

  private

  def todo_params
    params.require(:todo).permit(:description, :completed)
  end
end
