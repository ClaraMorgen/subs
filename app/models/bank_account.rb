class BankAccount < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  has_many :subscriptions, dependent: :destroy
end
