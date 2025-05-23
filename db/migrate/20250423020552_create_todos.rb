class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :description
      t.boolean :completed, default: false
      t.integer :position

      t.timestamps
    end
  end
end
