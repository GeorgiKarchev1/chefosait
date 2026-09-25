import { redirect } from "next/navigation";

export default function ProjectsPage() {
  // Notes contains no project case studies; keep the old URL useful without sample claims.
  redirect("/#uslugi");
}
