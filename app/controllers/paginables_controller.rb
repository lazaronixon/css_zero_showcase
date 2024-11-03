class PaginablesController < ApplicationController
  def index
    set_page_and_extract_portion_from Movie.order(:name), per_page: 10
    sleep 3.seconds unless @page.first?
  end
end