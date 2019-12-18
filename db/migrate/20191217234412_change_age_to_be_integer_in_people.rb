class ChangeAgeToBeIntegerInPeople < ActiveRecord::Migration[6.0]
  def change
    change_column :people, :age, :integer, using: 'age::integer'
  end
end
