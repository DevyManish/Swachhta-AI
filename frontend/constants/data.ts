import { NavItem } from "@/types";

export const IMG_MAX_LIMIT = 10;

export type AnalysisType = {
  batchId: string;
  totalImages: number;
  averageScore: number | null;
  status: "pending" | "processed" | "failed";
  type: "auto" | "manual";
  createdAt: Date;
  updatedAt: Date;
};

export type dummyImages = {
  preview: string;
  name: string;
  size: number;
  lastModified: number;
};
const generateRandomBatchId = () => {
  const characters = "abcdef0123456789";
  return Array.from(
    { length: 24 },
    () => characters[Math.floor(Math.random() * characters.length)],
  ).join("");
};

export const analysisBatches: AnalysisType[] = [
  {
    batchId: generateRandomBatchId(),
    type: "auto",
    totalImages: 120,
    averageScore: 0,
    status: "pending",
    createdAt: new Date("2023-09-01T10:00:00Z"),
    updatedAt: new Date("2023-09-01T12:00:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "auto",
    totalImages: 200,
    averageScore: 88.5,
    status: "processed",
    createdAt: new Date("2023-09-10T08:30:00Z"),
    updatedAt: new Date("2023-09-10T08:30:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "auto",
    totalImages: 50,
    averageScore: 72.3,
    status: "processed",
    createdAt: new Date("2023-09-05T14:45:00Z"),
    updatedAt: new Date("2023-09-05T16:00:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "auto",
    totalImages: 300,
    averageScore: 63.7,
    status: "processed",
    createdAt: new Date("2023-09-15T09:00:00Z"),
    updatedAt: new Date("2023-09-15T11:45:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "auto",
    totalImages: 100,
    averageScore: 50,
    status: "failed",
    createdAt: new Date("2023-09-12T12:20:00Z"),
    updatedAt: new Date("2023-09-12T13:10:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "manual",
    totalImages: 100,
    averageScore: 50,
    status: "failed",
    createdAt: new Date("2023-09-12T12:20:00Z"),
    updatedAt: new Date("2023-09-12T13:10:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "auto",
    totalImages: 100,
    averageScore: 50,
    status: "failed",
    createdAt: new Date("2023-09-12T12:20:00Z"),
    updatedAt: new Date("2023-09-12T13:10:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "auto",

    totalImages: 100,
    averageScore: 50,
    status: "failed",
    createdAt: new Date("2023-09-12T12:20:00Z"),
    updatedAt: new Date("2023-09-12T13:10:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "manual",
    totalImages: 100,
    averageScore: 50,
    status: "failed",
    createdAt: new Date("2023-09-12T12:20:00Z"),
    updatedAt: new Date("2023-09-12T13:10:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "auto",

    totalImages: 100,
    averageScore: 50,
    status: "failed",
    createdAt: new Date("2023-09-12T12:20:00Z"),
    updatedAt: new Date("2023-09-12T13:10:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "auto",

    totalImages: 100,
    averageScore: 50,
    status: "failed",
    createdAt: new Date("2023-09-12T12:20:00Z"),
    updatedAt: new Date("2023-09-12T13:10:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "manual",

    totalImages: 100,
    averageScore: 50,
    status: "failed",
    createdAt: new Date("2023-09-12T12:20:00Z"),
    updatedAt: new Date("2023-09-12T13:10:00Z"),
  },
  {
    batchId: generateRandomBatchId(),
    type: "manual",
    totalImages: 100,
    averageScore: 50,
    status: "failed",
    createdAt: new Date("2023-09-12T12:20:00Z"),
    updatedAt: new Date("2023-09-12T13:10:00Z"),
  },
];

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: "user",
    label: "user",
  },
  {
    title: "Analysis",
    href: "/dashboard/analysis",
    icon: "employee",
    label: "employee",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: "profile",
    label: "profile",
  },
];

export const dummyImages: dummyImages[] = [
  {
    preview: "https://via.placeholder.com/600x400",
    name: "sample1.jpg",
    size: 2500000,
    lastModified: Date.now() - 86400000,
  },
  {
    preview: "https://via.placeholder.com/600x400",
    name: "sample2.png",
    size: 3200000,
    lastModified: Date.now() - 172800000,
  },
  {
    preview: "https://via.placeholder.com/600x400",
    name: "sample3.jpg",
    size: 1800000,
    lastModified: Date.now() - 259200000,
  },
];
