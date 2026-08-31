class ColorsPreview < Lookbook::Preview
  def all
    colors_css_path = Rails.application.assets.reveal(:path).find do
      it.to_s.end_with?("css-zero/colors.css")
    end
    contents = File.read(colors_css_path)
    variable_names = contents.scan(/(--[^:]+):/).map { it[0] }

    # A hash like so:
    # { "Slate" => ["--slate-50", ...], "Neutral" => ["--neutral-50", ...] }
    groups = variable_names.group_by { it.match("--([^-]+)")[1].capitalize }

    render template: "colors_preview/all", assigns: { groups: groups }
  end
end
