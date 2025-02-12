class PaginablesController < ApplicationController
  def index
    set_page_and_extract_portion_from Movie.order(:name), per_page: 10
    slow_down_next_pages
  end

  def slow_down_next_pages
    sleep 2.seconds unless @page.first?
  end
end
