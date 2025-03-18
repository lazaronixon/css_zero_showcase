class CreateCitizens < ActiveRecord::Migration[8.0]
  def change
    create_table :citizens do |t|
      t.string :name, null: false
      t.references :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
