require 'rails_helper'

RSpec.describe BankAccount, type: :model do

context "Check DB columns" do  
	{
		name: :string
	}.each do |attribute, type|
		it "should be created with #{attribute}" do 
			is_expected.to have_db_column(attribute).of_type type
		end
	end
end

context "Check validations" do
	it "should belong to user" do
		is_expected.to belong_to :user		
	end
end

end
