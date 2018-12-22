require 'rails_helper'

RSpec.describe BankAccount, type: :model do

context "Check DB columns" do  
	it "should be created with a name" do 
		is_expected.to have_db_column(:name).of_type :string
	end
end

context "Check validations" do
	it "should belong to user" do
		is_expected.to belong_to :user		
	end
end

end
