class Subscription < ApplicationRecord
  belongs_to :category
  has_many :reminders, dependent: :destroy
  belongs_to :bank_account
  belongs_to :user

  validates :title, :amount_cents, presence: true

  monetize :amount_cents

  def check_bank_account(bank_name, user)
  	if BankAccount.find_by(name: bank_name)
  		bank = BankAccount.find_by(name: bank_name)
  	else
  		bank = BankAccount.create(name: bank_name, user: user)
  	end
  	bank
  end
end
