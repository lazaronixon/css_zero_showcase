class CreateFruits < ActiveRecord::Migration[8.0]
  def change
    create_table :fruits do |t|
      t.string :description
      t.string :key

      t.timestamps
    end
  end
end
