"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationbButtonProps = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
};

const PaginationbButton = ({
  page,
  setPage,
  totalPages,
}: PaginationbButtonProps) => {
  const pageNumbers = [];

  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  for (let p = start; p <= end; p++) {
    pageNumbers.push(p);
  }
  return (
    <Pagination className="my-6 ">
      <PaginationContent>
        {/* PREVIOUS */}
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            className={page === 1 ? "pointer-events-none opacity-50" : ""}
            onClick={() => page > 1 && setPage(page - 1)}
          />
        </PaginationItem>

        {/* NUMBERED PAGES */}
        {pageNumbers.map((p) => (
          <PaginationItem key={p} className="cursor-pointer">
            <PaginationLink isActive={p === page} onClick={() => setPage(p)}>
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* NEXT */}
        <PaginationItem className="cursor-pointer">
          <PaginationNext
            className={
              page === totalPages ? "pointer-events-none opacity-50" : ""
            }
            onClick={() => page < totalPages && setPage(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationbButton;
