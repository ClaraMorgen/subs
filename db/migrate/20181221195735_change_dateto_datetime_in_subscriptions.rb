class ChangeDatetoDatetimeInSubscriptions < ActiveRecord::Migration[5.2]
  def change
  	change_column :subscriptions, :end_date, :datetime
  	change_column :subscriptions, :due_date, :datetime
  end
end
