class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.string :title
      t.string :frequency
      t.integer :amount_cents
      t.date :due_date
      t.date :end_date
      t.references :category, foreign_key: true
      t.references :bank_account, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
