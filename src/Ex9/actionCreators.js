import { createAction } from "@reduxjs/toolkit";

export const apiRequested =  createAction("apiRequested");
export const apiCallSucceeded = createAction("apiCallSucceeded");
export const apiCallFailed =  createAction("apiCallFailed");