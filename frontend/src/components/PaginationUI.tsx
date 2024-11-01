import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@components/ui/pagination";

export const PaginationUI = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="border-2 border-stone-200 bg-white text-stone-800 text-lg" />
        </PaginationItem>
        <div className="flex space-x-2 text-lg text-stone-500">
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>6</PaginationLink>
          </PaginationItem>
        </div>
        <PaginationItem>
          <PaginationNext className="border-2 border-stone-200 bg-white text-stone-800 text-lg" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
