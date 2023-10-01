import { forwardRef } from "react";
import Button from "../Button";

const EmailInput = forwardRef(function EmailInput(
  { email, error, onSubmit, onChange },
  ref,
) {
  return (
    <>
      <div>
        <form action="#" onSubmit={onSubmit} noValidate>
          <div className="mb-3 flex justify-between">
            <label className=" text-xs font-bold" htmlFor="email">
              Email address
            </label>

            <span className="empty:hidden text-xs font-bold text-tomato-500">
              {error}
            </span>
          </div>
          <input
            ref={ref}
            autoFocus
            required
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="email@company.com"
            onChange={onChange}
            className={`outline outline-1 outline-neutral-gray-300 w-full rounded-lg py-4 ps-6 focus:outline-neutral-gray-700 mb-6 ${
              error
                ? "bg-tomato-500/25 outline-[#BB7C77] text-[#BB7C77] font-bold placeholder:text-[#BB7C77]/75"
                : ""
            }`}
          />
          <Button text={"Subscrible to monthly newsletter"} type={"submit"} />
        </form>
      </div>
    </>
  );
});

export default EmailInput;
