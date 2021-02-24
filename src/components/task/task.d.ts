declare module "@material-ui/icons/StarBorder";
declare module "@material-ui/icons/Star";

export interface ITask {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask: any;
  onPinnedTask: any;
  className?: string;
}
