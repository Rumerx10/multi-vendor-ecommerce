"use client";
import { useState, useMemo, useCallback } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoWarningOutline } from "react-icons/io5";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Trash, Edit, PlusIcon, SearchIcon } from "lucide-react";
import CategoryDropdown from "@/components/seller/sellerUtilities/CategoryDropdown";
import StockStatusDropdown from "@/components/seller/sellerUtilities/StockStatusDropdown";
import Image from "next/image";
import Link from "next/link";

interface Product {
  productId: string;
  image: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: string;
}

const defaultData: Product[] = [
  {
    productId: "1",
    image: "",
    name: "Premium Cotton T-Shirt",
    sku: "TS-001",
    price: 100,
    stock: 200,
    status: "Active",
  },
  {
    productId: "2",
    image: "",
    name: "Leather Wallet",
    sku: "WL-002",
    price: 50,
    stock: 20,
    status: "Active",
  },
  {
    productId: "3",
    image: "",
    name: "Wireless Earbuds",
    sku: "EB-003",
    price: 70,
    stock: 12,
    status: "Low Stock",
  },
];

const Products = () => {
  const [data, setData] = useState<Product[]>([...defaultData]);
  const [search, setSearch] = useState<string>("");
  const [deleteDialog, setDeleteDialog] = useState<boolean>(false);
  const [deleteData, setDeleteData] = useState<string>("");

  const handleDelete = useCallback((productId: string) => {
    setDeleteData(productId);
    setDeleteDialog(true);
  }, []);

  const confirmDelete = useCallback(() => {
    if (!deleteData) return;
    setData((prev) => prev.filter((item) => item.productId !== deleteData));
    setDeleteDialog(false);
    setDeleteData("");
  }, [deleteData]);

  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.sku.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const columns = useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: "image",
        header: "Image",
        cell: () => (
          <Image
            height={46}
            width={46}
            src="/Rectangle.png"
            alt="Product"
            className="w-[46px] h-[46px] object-cover rounded"
          />
        ),
      },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "sku", header: "SKU" },
      {
        accessorKey: "price",
        header: "Price",
        cell: (info) => `$${info.getValue()}`,
      },
      { accessorKey: "stock", header: "Stock" },
      { accessorKey: "status", header: "Status" },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex gap-2">
            <Link href={`/seller/products/update/${row.original.productId}`}>
              <Button className="border border-borderGray bg-white h-10 px-4 py-3 rounded-sm hover:bg-borderGray">
                <Edit className="w-4 h-4 text-black" />
                <p className="text-black">Edit</p>
              </Button>
            </Link>
            <Button
              onClick={() => handleDelete(row.original.productId)}
              className="group border border-liteTomato hover:bg-tomato rounded-sm bg-white h-10 px-4 py-3"
            >
              <Trash className="w-4 h-4 text-tomato group-hover:text-white duration-300" />
              <p className="text-tomato group-hover:text-white font-medium duration-300">
                Delete
              </p>
            </Button>
          </div>
        ),
      },
    ],
    [handleDelete]
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-10">
        <h3 className="font-semibold text-3xl">Products</h3>
        <Link 
          href="/seller/products/add-product"
          type="button"
          className="flex gap-2.5 bg-tomato text-white font-medium px-20 py-4 rounded-sm cursor-pointer"
        >
          <PlusIcon /> Add Product
        </Link>
      </div>

      <div className="flex gap-5 items-center mb-10 h-14 w-full">
        <div className="w-6/12 px-3 h-full flex items-center gap-2.5 border border-borderGray rounded-sm">
          <SearchIcon color="gray" />
          <input
            placeholder="Search by name or SKU"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none w-full outline-none"
          />
        </div>
        <div className="w-6/12 flex items-center gap-5">
          <CategoryDropdown />
          <StockStatusDropdown />
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span>
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>

      <Dialog
        open={deleteDialog}
        onOpenChange={(open) => {
          setDeleteDialog(open);
          if (!open) setDeleteData("");
        }}
      >
        <DialogContent className="text-center flex flex-col items-center justify-center gap-5">
          <div className="flex justify-center">
            <div className="flex justify-center bg-liteTomato h-16 w-16 items-center rounded-full">
              <IoWarningOutline size={32} className="text-tomato w-8 h-8" />
            </div>
          </div>
          <DialogHeader className="">
            <DialogTitle className="text-2xl font-semibold text-center">
              Delete Product?
            </DialogTitle>
          </DialogHeader>
          <p className="text-textGray">
            Are you sure you want to delete this product? <br />
            This action cannot be undone.
          </p>
          {/** Show the product name if available */}
          <p className="text-xl font-semibold">
            {data.find((item) => item.productId === deleteData)?.name}
          </p>

          <DialogFooter className="w-full flex">
            <div className="flex gap-3 items-center justify-center w-full">
              <Button
                variant="outline"
                className="border border-gray-300 px-4 py-2 h-10 cursor-pointer"
                onClick={() => setDeleteDialog(false)}
              >
                <RxCross2 className="w-4 h-4" />
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={confirmDelete}
                className="bg-tomato hover:bg-tomato/95 text-white flex items-center px-4 py-2 h-10 cursor-pointer"
              >
                <Trash className="w-4 h-4" />
                Delete
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
