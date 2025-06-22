module TasksHelper
  def status_icons
    { "in_progress" => "icon--timer", "done" => "icon--circle-check-big", "backlog" => "icon--circle-question-mark", "todo" => "icon--circle", "canceled" => "icon--circle-off" }
  end

  def priority_icons
    { "high" => "icon--arrow-up", "low" => "icon--arrow-down", "medium" => "icon--arrow-right" }
  end
end
