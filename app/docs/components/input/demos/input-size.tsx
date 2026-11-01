import { Input } from "@/registry/sector23/ui/input";

export function InputSize() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <Input
          size="sm"
          aria-label="Small"
          placeholder="Small"
          className="w-36"
        />
        <Input
          size="md"
          aria-label="Medium"
          placeholder="Medium (default)"
          className="w-36"
        />
        <Input
          size="lg"
          aria-label="Large"
          placeholder="Large"
          className="w-36"
        />
      </div>
      <div className="flex w-64 flex-col gap-4">
        <Input type="file" size="sm" aria-label="Small file" />
        <Input type="file" size="md" aria-label="Medium file" />
        <Input type="file" size="lg" aria-label="Large file" />
      </div>
    </div>
  );
}
