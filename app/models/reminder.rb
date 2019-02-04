class Reminder < ApplicationRecord
  belongs_to :subscription, dependent: :destroy
  validates :date, presence: true
end
