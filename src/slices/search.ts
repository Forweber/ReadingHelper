import { Book,SearchInfo } from "./search.d";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type SearchState={
  loading:boolean;
  data:Book[];
  error:Error | null;
  display:number;
  start:number;
  total:number;
}

const initialState:SearchState={
  loading:false,
  data: [],
  error:null,
  display:10,
  start:1,
  total:0,
}

const searchInstance = axios.create({
  headers: {
    "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID!,
    "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SERVER!
  }
});

export const searchBook = createAsyncThunk(
  "SEARCH_BOOK",
  async (param:{query: string;page?:number;}) => {
    const response = await searchInstance.get("/v1/search/book.json", {
      params: { query:param.query ,start: param.page?(param.page-1)*10+1:1}
    });
    console.log("search result is ...");
    console.log(response);
    return response.data as SearchInfo;
  }
);

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(searchBook.pending,(state,action)=>{
      return {...state,loading:true}
    });
    builder.addCase(searchBook.fulfilled, (state, action) => {
      const {items,display,start,total} = action.payload;
      return { ...state, loading:false, data: items,display,start,total};
    });
  }
});

export default search.reducer;
