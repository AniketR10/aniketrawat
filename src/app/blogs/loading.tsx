export default function BlogsLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 opacity-70">
        <div className="h-8 w-8 rounded-full border-2 border-current border-t-transparent animate-spin" />
        <p className="text-sm">Loading blogs...</p>
      </div>
    </div>
  );
}
