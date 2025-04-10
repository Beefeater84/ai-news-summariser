export const Skeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-8 w-full animate-pulse rounded bg-gray-200" />
      <div className="flex w-full animate-pulse items-center gap-4">
        <div className="h-32 w-32 rounded bg-gray-200" />
        <div className="flex flex-col gap-2">
          <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
};
