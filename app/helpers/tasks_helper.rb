module TasksHelper
  def status_icons
    { "in_progress" => "timer.svg", "done" => "circle-check-big.svg", "backlog" => "circle-help.svg", "todo" => "circle.svg", "canceled" => "circle-off.svg" }
  end

  def priority_icons
    { "high" => "arrow-up.svg", "low" => "arrow-down.svg", "medium" => "arrow-right.svg" }
  end
end