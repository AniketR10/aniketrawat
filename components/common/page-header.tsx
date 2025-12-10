interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <>
      <div className="flex flex-col mt-5 items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl capitalize">
            {title}
          </h1>
        </div>
      </div>
      <hr className="my-6" />
    </>
  );
}
