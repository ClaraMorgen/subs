require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end


# describe WorkDay do
#   it "should belong to a camp_day" do
#     teacher = create(:teacher)
#     contract = create(:contract, teacher: teacher, user: teacher.user)
#     work_day = WorkDay.new(user: contract.user, contract: contract)
#     expect(work_day).to be_invalid
#   end

#   it "should belong to a user" do
#     teacher = create(:teacher)
#     contract = create(:contract, teacher: teacher, user: teacher.user)
#     camp_day = create(:camp_day)
#     work_day = WorkDay.new(camp_day: camp_day, contract: contract)
#     expect(work_day).to be_invalid
#   end

#   it "should belong to a contract" do
#     user = create(:user)
#     camp_day = create(:camp_day)
#     work_day = WorkDay.new(camp_day: camp_day, user: user)
#     expect(work_day).to be_invalid
#   end

#   it "should belong to a user, a contract & a camp_day" do
#     teacher = create(:teacher)
#     contract = create(:contract, teacher: teacher, user: teacher.user)
#     camp_day = create(:camp_day)
#     work_day = WorkDay.new(camp_day: camp_day, contract: contract, user: contract.user)
#     expect(work_day).to be_valid
#   end
