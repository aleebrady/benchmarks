class CreateRecordmarks < ActiveRecord::Migration[6.0]
  def change
    create_table :recordmarks do |t|
      t.string :name
      t.string :link
      t.string :notes
      t.integer :workout_id

      t.timestamps
    end
  end
end
