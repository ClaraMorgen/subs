class CreateReminders < ActiveRecord::Migration[5.2]
  def change
    create_table :reminders do |t|
      t.datetime :date
      t.references :subscription, foreign_key: true

      t.timestamps
    end
  end
end
