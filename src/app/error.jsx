"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl text-center text-red-500">
        Something went wrong!
      </h1>
      <h1 className="text-3xl text-center text-amber-500">{error.message}</h1>
      <button onclick={() => reset()} className="btn btn-info">
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
