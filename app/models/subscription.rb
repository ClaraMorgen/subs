class Subscription < ApplicationRecord

  belongs_to :category, dependent: :destroy
  has_many :reminders
  belongs_to :bank_account, dependent: :destroy
  belongs_to :user, dependent: :destroy

  validates :title, :amount_cents, presence: true

  private
end
