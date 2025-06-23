export const project = {
  slug: "react-admin-dashboard",
  title: "React Admin Dashboard",
  description: "General purpose administration dashboard.",
  features: [
  "Navigation shell",
  "Data table",
  "Filters",
  "Charts",
  "Settings",
  "Responsive layout"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
