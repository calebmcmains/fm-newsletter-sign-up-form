import { useState, useRef } from "react";
import SignUpContainer from "./components/signuppage/SignupContainer";
import ThankYouContainer from "./components/thankyoupage/ThankYouContainer";

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef();

  const isEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handleFormSubmitWithValidate = (event) => {
    if (!isEmail(email)) {
      event.preventDefault();
      emailRef.current.focus();
      setError("Valid email required");
    } else {
      event.preventDefault();
      setError("");
      setShowThankYou(() => !showThankYou);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-neutral-gray-500">
        {!showThankYou ? (
          <SignUpContainer
            ref={emailRef}
            email={email}
            error={error}
            onSubmit={handleFormSubmitWithValidate}
            onChange={handleEmailChange}
          />
        ) : (
          <ThankYouContainer
            email={email}
            onClick={() => setShowThankYou(() => !showThankYou)}
          />
        )}
      </div>
    </>
  );
}

export default App;
