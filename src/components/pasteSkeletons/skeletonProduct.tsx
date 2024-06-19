"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonProduct = () => {
  return (
    <>
      <Card>
        <CardContent className="py-3 flex flex-col items-center ">
          <Skeleton className="size-52" />
          <div className="w-full mt-4 ">
            <div className="flex flex-col items-center">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-full h-3 mt-2" />
              <Skeleton className="w-2/4 h-3 mt-3" />
              <Skeleton className="w-4/5 h-5 mt-4" />
              <Skeleton className="w-full h-9 mt-5 bg-[#da5095]/80" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
