import { getTaskIndex } from "../../../actions";
import { TaskListWidget } from "../../../components";

export const dynamic = "force-dynamic";

export default async function CancelledPage() {
  const { data: index, error } = await getTaskIndex();

  if (error !== undefined) throw new Error(error);

  return <TaskListWidget index={index} type="cancelled" />;
}
