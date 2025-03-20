import { getBookCategoryById } from '@/app/services/book.service';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const getYear = (dateString) => dateString.split('-')[0];

