class SubscriptionPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all.includes(:category)
    end
  end

  def create?
    true
  end

  def new?
    create?
  end

  def show?
    record.user == user
  end
end
