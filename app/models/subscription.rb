class Subscription < ApplicationRecord

  belongs_to :category, dependent: :destroy
  has_many :reminders
  belongs_to :bank_account, dependent: :destroy
  belongs_to :user, dependent: :destroy

  validates :title, :amount_cents, presence: true


  def check_bank_account(bank_name, user)
  	if BankAccount.find_by(name: bank_name)
  		bank = BankAccount.find_by(name: bank_name)
  	else
  		bank = BankAccount.create(name: bank_name, user: user)
  	end
  	bank
  end
end
