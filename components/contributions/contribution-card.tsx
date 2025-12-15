import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/common/icons"; 
import { ScrapedData } from "@/lib/scrape-meta";

interface BlogCardProps {
  data: ScrapedData;
}

export default function BlogCard({ data }: BlogCardProps) {
  return (
    <Link href={data.url} target="_blank" className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md">
        
        <div className="relative h-48 w-full overflow-hidden border-b border-border bg-muted">
          {data.image && (
            <Image
              src={data.image}
              alt={data.title}
              fill
              unoptimized={true}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          
          <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
            <time className="font-medium">{data.date}</time>
          </div>

          <h3 className="mb-2 text-lg font-bold leading-tight tracking-tight text-foreground group-hover:text-primary group-hover:underline decoration-2 underline-offset-4 transition-colors line-clamp-2">
            {data.title}
          </h3>

          <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3">
            {data.description}
          </p>
          <div className="mt-auto flex items-center gap-2 pt-4 border-t border-border/50">
            <div className="relative h-6 w-6 overflow-hidden rounded-full border border-border">
              <Image 
                src="/image.png" 
                alt="Author" 
                fill 
                unoptimized={true}
                className="object-cover" 
              />
            </div>
            <span className="text-sm font-semibold text-primary">
              Aniket Rawat
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}