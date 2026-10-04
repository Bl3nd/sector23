import { Avatar, AvatarFallback } from "@/app/components/avatar";
import {
  PreviewCard,
  PreviewCardArrow,
  PreviewCardContent,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardTrigger,
} from "@/app/components/preview-card";

const engineer = {
  name: "Priya Raman",
  initials: "PR",
  role: "Site Reliability Engineer",
  team: "Platform Infrastructure",
  location: "Lisbon · 7:42 PM local time",
  stats: [
    { label: "Incidents resolved", value: "38" },
    { label: "On-call this month", value: "9 days" },
  ],
};

export default function PreviewCardPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="max-w-md text-sm">
        Elevated checkout latency was traced to a saturated connection pool and mitigated by{" "}
        <PreviewCard>
          <PreviewCardTrigger href="#">{engineer.name}</PreviewCardTrigger>
          <PreviewCardPortal>
            <PreviewCardPositioner>
              <PreviewCardPopup>
                <PreviewCardArrow />
                <PreviewCardContent className="w-64 gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar>{engineer.initials}</Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{engineer.name}</span>
                      <span className="text-xs text-muted-foreground">{engineer.role}</span>
                    </div>
                  </div>
                  <div className="flex flex-col text-xs text-muted-foreground">
                    <span>{engineer.team}</span>
                    <span>{engineer.location}</span>
                  </div>
                  <dl className="grid grid-cols-2 gap-2">
                    {engineer.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col">
                        <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                        <dd className="text-sm font-medium">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </PreviewCardContent>
              </PreviewCardPopup>
            </PreviewCardPositioner>
          </PreviewCardPortal>
        </PreviewCard>{" "}
        at 14:06 UTC. A follow-up postmortem is scheduled for Thursday.
      </p>
    </div>
  );
}
