import { useState } from "react";

import ComponentCard from "../../common/ComponentCard";
import Input from "../input/InputField";
import Label from "../Label";

export default function InputStates() {
  const [email, setEmail] = useState("");
  const [emailTwo, setEmailTwo] = useState("");
  const [error, setError] = useState(false);

  // Simulate a validation check
  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  const handleEmailTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailTwo(value);
    validateEmail(value);
  };
  return (
    <ComponentCard
      desc="Validation styles for error, success and disabled states on form controls."
      title="Input States"
    >
      <div className="space-y-5 sm:space-y-6">
        {/* Error Input */}
        <div>
          <Label>Email</Label>
          <Input
            hint={error ? "This is an invalid email address." : ""}
            type="email"
            value={email}
            error={error}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Success Input */}
        <div>
          <Label>Email</Label>
          <Input
            hint={!error ? "This is an success message." : ""}
            success={!error}
            type="email"
            value={emailTwo}
            onChange={handleEmailTwoChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Disabled Input */}
        <div>
          <Label>Email</Label>
          <Input
            disabled
            type="text"
            value="disabled@example.com"
            placeholder="Disabled email"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
