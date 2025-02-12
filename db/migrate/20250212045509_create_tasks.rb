class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.string :title,    null: false
      t.string :label,    null: false
      t.string :status,   null: false
      t.string :priority, null: false

      t.timestamps
    end
  end
end
