import { createSlice } from '@reduxjs/toolkit';
// import { PostDetail } from '../model/Post';

export const initParamsFilterPost = {
  page: 1,
  limit: 10,
  keyword: '',
  category: 0,
  column: 'id',
  sort: '',
};
// export const initPostDetail: PostDetail = {
//   title: '',
//   slug: '',
//   content: '',
//   thumbnail: '',
//   categories: [],
//   meta_title: '',
//   meta_desc: '',
// };

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    paramsFilter: initParamsFilterPost,
    postSelected: [],
    // isDoneDelPost: false,
    // postDetail: initPostDetail,
    // postContent: '',
  },
  reducers: {
    setParamFilter(state, action) {
      state.paramsFilter = action.payload;
    },
    setPostSelected(state, action) {
      state.postSelected = action.payload;
    },
    // setDoneDelPosts(state, action) {
    //   // state.isDoneDelPost = action.payload;
    // },
    // setPostDetail(state, action) {
    //   // state.postDetail = action.payload;
    // },
    // setContentDetail(state, action) {
    //   state.postContent = action.payload;
    // },
  },
});

export const { setParamFilter, setPostSelected } = orderSlice.actions;

export default orderSlice.reducer;
