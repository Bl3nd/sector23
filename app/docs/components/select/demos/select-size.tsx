import {
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from "@/registry/sector23/ui/select";

const plans = [
  { label: "Hobby", value: "hobby" },
  { label: "Pro", value: "pro" },
  { label: "Enterprise", value: "enterprise" },
];

function PlanSelect({
  size,
  label,
}: {
  size: "sm" | "md" | "lg";
  label: string;
}) {
  return (
    <div className="flex w-40 flex-col items-start gap-1.5">
      <Select items={plans} size={size} defaultValue="pro">
        <SelectLabel>{label}</SelectLabel>
        <SelectTrigger>
          <SelectValue />
          <SelectIcon />
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectScrollUpArrow />
              <SelectList>
                {plans.map((plan) => (
                  <SelectItem key={plan.value} value={plan.value}>
                    <SelectItemText>{plan.label}</SelectItemText>
                    <SelectItemIndicator />
                  </SelectItem>
                ))}
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </Select>
    </div>
  );
}

export function SelectSize() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-6">
      <PlanSelect size="sm" label="Small" />
      <PlanSelect size="md" label="Medium (default)" />
      <PlanSelect size="lg" label="Large" />
    </div>
  );
}
