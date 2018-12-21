class Subscription < ApplicationRecord

  has_one :category
  belongs_to :bank_account, dependent: :destroy
  belongs_to :user, dependent: :destroy

  validates :title, :amount_cents, presence: true
end
