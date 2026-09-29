import { Progress as BaseProgress } from "@base-ui/react/progress";

function Progress({ className, ...props }: BaseProgress.Root.Props) {
  return <BaseProgress.Root data-slot="progress" className={className} {...props} />;
}

function ProgressLabel({ className, ...props }: BaseProgress.Label.Props) {
  return <BaseProgress.Label data-slot="progress-label" className={className} {...props} />;
}

function ProgressTrack({ className, ...props }: BaseProgress.Track.Props) {
  return <BaseProgress.Track data-slot="progress-track" className={className} {...props} />;
}

function ProgressIndicator({ className, ...props }: BaseProgress.Indicator.Props) {
  return <BaseProgress.Indicator data-slot="progress-indicator" className={className} {...props} />;
}

function ProgressValue({ className, ...props }: BaseProgress.Value.Props) {
  return <BaseProgress.Value data-slot="progress-value" className={className} {...props} />;
}

export { Progress, ProgressLabel, ProgressTrack, ProgressIndicator, ProgressValue };
