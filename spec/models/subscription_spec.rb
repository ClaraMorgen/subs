require 'rails_helper'

RSpec.describe Subscription, type: :model do

  context "check DB columns" do
    { title: :string,
      frequency: :string,
      amount_cents: :integer,
      end_date: :date,
      due_date: :date }.each do |attribute, type|
      it "should be created with a #{attribute}" do
        is_expected.to have_db_column(attribute).of_type type
      end
    end
  end

  context "check validations" do
    it "should validate title" do
      is_expected.to validate_presence_of :title
    end

    it "should validate title" do
      is_expected.to validate_presence_of :amount_cents
    end
  end

  context "ActiveRecord relations" do
    it "should belong to a category" do
      is_expected.to belong_to :category
    end

    it "can have many reminders" do
      is_expected.to have_many :reminders
    end
  end
end
