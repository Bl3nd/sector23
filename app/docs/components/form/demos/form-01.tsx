import { Button } from "@/registry/sector23/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/sector23/ui/field";
import { Form } from "@/registry/sector23/ui/form";
import { Input } from "@/registry/sector23/ui/input";

export default function Form01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Form className="max-w-xs">
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <Input required placeholder="John Doe" />
          <FieldError />
        </Field>
        <Field name="email">
          <FieldLabel>Email</FieldLabel>
          <Input required type="email" placeholder="john.doe@example.com" />
          <FieldError />
        </Field>
        <Button type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </div>
  );
}
