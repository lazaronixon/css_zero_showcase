# @js app/javascript/controllers/timezone_cookie_controller.js
class TimezoneCookiePreview < Lookbook::Preview
  # Initialization
  # ----
  # You can use the cookie to set your timezone in rails.
  #
  # ```html
  # <body data-controller="timezone-cookie">...</body>
  # ```
  #
  # ```ruby
  #class ApplicationController < ActionController::Base
  #  around_action :set_time_zone
  #
  #  def set_time_zone
  #    Time.use_zone(cookies[:timezone]) { yield }
  #  end
  #end
  # ```
  def default
  end
end