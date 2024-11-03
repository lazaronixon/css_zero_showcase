class Movie < ApplicationRecord
  enum :kind, %i[ suggestion historical ]
end
