"use client";

import { useEffect } from "react";

export default function Error({
  message,
  reset,
}: {
  message: string;
  reset?: () => void; // need a way to handle page reloading
}) {
  useEffect(() => {
    // log the error to an error reporting service
    console.log(message);
  }, [message]);

  return (
    <div className="flex flex-col justify-center items-center p-24">
      <div>Something went wrong! {message}</div>
      <button
        type="button"
        className="mt-6 py-2 p-4 border rounded"
        onClick={() => {
          if (reset) {
            reset();
          }
        }}
      >
        Try again
      </button>
    </div>
  );
}
