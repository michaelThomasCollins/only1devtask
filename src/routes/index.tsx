import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FieldError } from "react-aria-components";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input, Label } from "../components/Field";
import { TextField } from "../components/TextField";
import users from "../../users.json";
export const Route = createFileRoute("/")({
  component: LoginComponent,
});

function LoginComponent() {
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <Label>Login</Label>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));
          var success = users.filter(
            (user: { username: string; password: string }) =>
              user.username == data.username && user.password == data.password
          );
          success.length > 0 ? navigate({ to: "/user" }) : null;
        }}
      >
        <TextField name="username" type="text" isRequired>
          <Label>Username</Label>
          <Input />
          <FieldError />
        </TextField>
        <TextField name="password" type="password" isRequired>
          <Label>Password</Label>
          <Input />
          <FieldError />
        </TextField>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
