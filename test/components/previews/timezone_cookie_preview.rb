# @js app/javascript/controllers/timezone_cookie_controller.js
class TimezoneCookiePreview < Lookbook::Preview
  # Install
  # ---
  # ```bash
  # bin/rails generate css_zero:add timezone_cookie
  # ```
  #
  # Initialization
  # ---
  # ```html
  # <body data-controller="timezone-cookie">...</body>
  # ```
  #
  # Implementation
  # ---
  # ```ruby
  # class ApplicationController < ActionController::Base
  #   around_action :set_time_zone
  #
  #   def set_time_zone
  #     Time.use_zone(cookies[:timezone]) { yield }
  #   end
  # end
  # ```
  def basic
  end
end
