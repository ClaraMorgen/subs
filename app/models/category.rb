class Category < ApplicationRecord
  validates :name, presence: true
  has_many :subscriptions, dependent: :destroy
end
