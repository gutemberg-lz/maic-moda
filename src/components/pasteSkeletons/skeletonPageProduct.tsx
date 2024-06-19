import { SkeletonProduct } from "@/components/pasteSkeletons/skeletonProduct";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonPageProduct = () => {
  return (
    <div className=" bg-muted/40">
      <div className="w-full flex flex-col md:flex-row  py-4 h-[calc(4*140px)]">
        <div className="h-full w-1/6 px-2  flex flex-col gap-4 justify-start items-center md:flex-col">
          {Array.from({ length: 5 }).map((e, index) => (
            <Skeleton key={index} className="w-4/5 h-32 rounded-md border-2" />
          ))}
        </div>
        <div className="h-full flex-1 flex justify-around gap-1">
          <Skeleton className="flex-1 h-full bg-muted-foreground/50" />
          <div className="flex-1 flex flex-col justify-end px-3 py-3">
            <Skeleton className="w-full h-10 my-4" />
            <div className="mt-3 flex flex-col gap-2">
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-3 w-40" />
            </div>
            <div className="w-full flex mb-5">
              <div className="h-full flex flex-col items-start justify-end ">
                <Skeleton className="mt-3 mb-2 w-28 h-[20px]" />

                <div className="flex items-center gap-1">
                  <Skeleton className="w-32 h-[40px]" />

                  <Skeleton className="size-10  rounded-full font-semibold text-sm bg-[#da5095]/70" />
                </div>
              </div>
            </div>
            <Skeleton className="w-full h-9 border border-muted-foreground my-5 rounded-sm" />
            <Skeleton className="w-full h-11 rounded-md font-semibold text-lg bg-[#da5095]/80 hover:bg-[#da5095] text-white" />
            <Skeleton className="w-full h-11 rounded-md mt-4 border-[2px] border-[#da5095] bg-transparent" />
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <Skeleton className="ml-5 w-72 h-10" />
        <div className="w-full  mt-5  grid grid-cols-4 px-3 py-1 gap-3">
          {Array.from({ length: 4 }).map((ele, index) => (
            <SkeletonProduct key={index} />
          ))}
        </div>
      </div>
      <div className="w-full mt-10 ">
        <Skeleton className="ml-5 w-72 h-10" />
        <Skeleton className="w-[97%] mx-auto h-20 mt-5 " />
      </div>
    </div>
  );
};
