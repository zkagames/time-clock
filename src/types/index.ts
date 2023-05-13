import dayjs from "dayjs";
import { ReactNode } from "react";

export type Page = {
  path?: string,
  display: string,
  render: ()=> ReactNode
}

export type DailyCard = {
  inTime: string;
  outTime: string;
}

export type MonthlyCardsRow = DailyCard & {user:string, day: string}

