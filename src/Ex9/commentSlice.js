import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentData: null,
    errorMessage: "",
    id: 1
  },
  reducers: {//déclaration des reducer functions
    updateComment: (state, action) => {
      state.commentData = action.payload;
    },
    updateError: (state, action) => {
      state.errorMessage = action.payload;
    },
    incrementCommentId: (state) => {
      state.id += 1;
    },
    decrementCommentId: (state) => {
      state.id -= 1;
    }
  }
});

// Des action creators sont générées pour chaque reducer function
export const { updateComment, updateError, incrementCommentId, decrementCommentId } = commentSlice.actions;
export default commentSlice.reducer;