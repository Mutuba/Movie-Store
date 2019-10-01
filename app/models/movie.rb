# frozen_string_literal: true

class Movie < ApplicationRecord
   belongs_to :user

  validates :title, presence: true
  validates :description, length: { minimum: 10 }, allow_blank: true
end
