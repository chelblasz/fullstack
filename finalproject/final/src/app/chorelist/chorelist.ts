import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// @NgModule({
//   declarations: [],
//   imports: [CommonModule]
// })
export const MOCKDOCUMENTS: any[] = [
  {
    id: "1",
    name: "Kitchen Chore List",
    children: [
      {
        id: "2",
        name: "Fill/Empty Dishwasher"
      },
      {
        id: "3",
        name: "Clear and Sanitize Counters"
      },
      {
        id: "4",
        name: "Fill/Empty Dishwasher"
      },
      {
        id: "5",
        name: "Sweep Floors"
      },
      {
        id: "5",
        name: "Mop Floors"
      }
    ]
  },
  {
    id: "6",
    name: "Bathroom Chore List",
    children: [
      {
        id: "7",
        name: "Fill/Empty Dishwasher"
      },
      {
        id: "8",
        name: "Clear and Sanitize Counters"
      },
      {
        id: "8",
        name: "Fill/Empty Dishwasher"
      },
      {
        id: "10",
        name: "Sweep Floors"
      },
      {
        id: "11",
        name: "Mop Floors"
      }
    ]
  }
];
