import { Input } from "@/registry/sector23/ui/input";

export function InputSize() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <Input scale="sm" aria-label="Small" placeholder="Small" />
        <Input scale="md" aria-label="Medium" placeholder="Medium (default)" />
        <Input scale="lg" aria-label="Large" placeholder="Large" />
      </div>
      <div className="flex w-64 flex-col gap-4">
        <Input type="file" scale="sm" aria-label="Small file" />
        <Input type="file" scale="md" aria-label="Medium file" />
        <Input type="file" scale="lg" aria-label="Large file" />
      </div>
    </div>
  );
}
