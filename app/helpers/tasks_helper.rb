module TasksHelper
  def status_icons
    { "in_progress" => "icon--clock", "done" => "icon--check-circle", "backlog" => "icon--question-mark-circle", "todo" => "icon--information-circle", "canceled" => "icon--x-circle" }
  end

  def priority_icons
    { "high" => "icon--arrow-up", "low" => "icon--arrow-down", "medium" => "icon--arrow-right" }
  end
end
