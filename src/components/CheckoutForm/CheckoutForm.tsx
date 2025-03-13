import Button from "../ui/Button";
import Input from "../ui/Input";
import { Form, FormSection, Label } from "./CheckoutForm.styles";

export default function CheckoutForm() {
  return (
    <Form action="">
      <h2>Contact details</h2>
      <FormSection style={{ flexDirection: "row", gap: 5 }}>
        <div style={{ width: "50%" }}>
          <Label htmlFor="firstname-input">Firstname</Label>
          <Input id="firstname-input" type="text" placeholder="John" />
        </div>
        <div style={{ width: "50%" }}>
          <Label htmlFor="firstname-input">Lastname</Label>
          <Input id="firstname-input" type="text" placeholder="Doe" />
        </div>
      </FormSection>
      <FormSection>
        <Label htmlFor="email-input">Email</Label>
        <Input id="email-input" type="email" placeholder="you@example.com" />
      </FormSection>
      <FormSection>
        <Label htmlFor="phone-input">Phone Number</Label>
        <Input id="phone-input" type="tel" placeholder="123 456 78 90" />
      </FormSection>
      <FormSection>
        <Label htmlFor="adress-input">Adress</Label>
        <Input
          id="adress-input"
          type="text"
          placeholder=" 456 Elm Street, Los Angeles"
        />
      </FormSection>
      <Button $primary>Confirm</Button>
    </Form>
  );
}
