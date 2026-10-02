import { Input } from "@/app/components/input";

export default function InputPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Input placeholder="Enter you email" className="w-56" />
    </div>
  );
}
