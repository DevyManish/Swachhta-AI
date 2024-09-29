"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { analysisBatches, AnalysisType } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";
import moment from "moment"; // Import moment for date formatting

export const columns: ColumnDef<AnalysisType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "batchId",
    header: "BATCH ID",
    cell: ({ row }) => <code>{row.original.batchId}</code>,
  },
  {
    accessorKey: "totalImages",
    header: "IMAGE COUNT",
  },
  {
    accessorKey: "averageScore",
    header: "SCORE",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  {
    accessorKey: "type",
    header: " CAPTURE TYPE",
  },
  {
    accessorKey: "createdAt",
    header: "Published At",
    cell: ({ row }) =>
      moment(row.original.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
