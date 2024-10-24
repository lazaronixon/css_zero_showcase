class CreateSearchables < ActiveRecord::Migration[7.1]
  def change
    create_table :searchables do |t|
      t.string  :term
      t.integer :kind

      t.timestamps
    end
  end
end
