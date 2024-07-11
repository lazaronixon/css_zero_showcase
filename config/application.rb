require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module CssZeroShowcase
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.1

    # Please, add to the `ignore` list any other `lib` subdirectories that do
    # not contain `.rb` files, or that should not be reloaded or eager loaded.
    # Common ones are `templates`, `generators`, or `middleware`, for example.
    config.autoload_lib(ignore: %w(assets tasks))

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    config.lookbook.preview_layout = "component_preview"
    config.lookbook.preview_inspector.drawer_panels = [:source, :css, :js, :notes]

    Lookbook.add_tag :css, %i[file_path]
    Lookbook.add_tag :js,  %i[file_path]

    Lookbook.add_panel :css, "lookbook/panels/css", { label: "CSS", disabled: -> (data) { data.preview.tags(:css).none? } }
    Lookbook.add_panel :js, "lookbook/panels/javascript", { label: "JS", disabled: -> (data) { data.preview.tags(:js).none? } }

    # Reduce action view log spam
    %w[render_template render_partial render_collection].each do |event|
      ActiveSupport::Notifications.unsubscribe "#{event}.action_view"
    end
  end
end
