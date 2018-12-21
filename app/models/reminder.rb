class Reminder < ApplicationRecord
  belongs_to :subscription
  validates :date, presence: true
end
