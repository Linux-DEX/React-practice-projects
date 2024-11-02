/* 

    useId is a react hook for generating unique IDs that can be passed to accessibility attributes.

*/

import React, { useId } from "react";

function PasswordField() {
  const passwordHintId = useId();
  console.log("passwordHintId -> ", passwordHintId);
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

const UseId = () => {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
};

export default UseId;
