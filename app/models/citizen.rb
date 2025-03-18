class Citizen < ApplicationRecord
  belongs_to :city

  delegate :state,    to: :city,  allow_nil: true
  delegate :state_id, to: :city,  allow_nil: true

  delegate :country,    to: :state, allow_nil: true
  delegate :country_id, to: :state, allow_nil: true
end
