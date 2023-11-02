import { createSlice } from "@reduxjs/toolkit";

const componentDataSlice = createSlice({
  name: "componentData",
  initialState: {
    CategoryDragAndDropData: null,
    ComprehensionData: null,
    DropDownBlanksData: null,
    ResetCheck: null,
  },
  reducers: {
    CategoryDragAndDropData(state, action) {
      return {
        ...state,
        CategoryDragAndDropData: action.payload,
      };
    },
    ComprehensionData(state, action) {
      return {
        ...state,
        ComprehensionData: action.payload,
      };
    },
    DropDownBlanksData(state, action) {
      return {
        ...state,
        DropDownBlanksData: action.payload,
      };
    },
    ResetCheck(state, action) {
      return {
        ...state,
        ResetCheck: action.payload,
      };
    },
  },
});

export const {
  CategoryDragAndDropData,
  ComprehensionData,
  DropDownBlanksData,
  ResetCheck,
} = componentDataSlice.actions;
export default componentDataSlice.reducer;
