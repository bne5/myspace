class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :age
      t.string :occupation
      t.string :avatar

      t.timestamps
    end
  end
end
