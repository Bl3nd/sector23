import { Button } from "@/app/components/button";
import { Field, FieldError, FieldLabel } from "@/app/components/field";
import { Form } from "@/app/components/form";
import { Input } from "@/app/components/input";

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
