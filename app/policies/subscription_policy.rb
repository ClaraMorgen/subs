class SubscriptionPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.where(user: user).includes(:category)
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
  def edit?
    true
  end

  def update?
    record.user == user
  end

  def destroy?
    record.user == user
  end
end
