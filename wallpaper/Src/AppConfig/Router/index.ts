import React from "react";
import TimeZones from "../../Screens/TimeZones";
import WallPaper from "../../Screens/WallPaper";

export const SCREEN_NAMES = {
  WALLPAPER: 'WALL PAPER',
  TIME_ZONES: 'TIME ZONE',
};

type RouterType = {
  key: number,
  name: string,
  component: any
}


export const ROUTE_NAMES: RouterType[] = [
  {
    key: 1,
    name: SCREEN_NAMES.WALLPAPER,
    component: WallPaper
  },
  {
    key: 1,
    name: SCREEN_NAMES.TIME_ZONES,
    component: TimeZones
  }
]