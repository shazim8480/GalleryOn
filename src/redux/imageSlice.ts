import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface Image {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface ImagesState {
  data: Image[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ImagesState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await axios.get<Image[]>(
    'https://jsonplaceholder.typicode.com/photos',
  );
  return response.data;
});

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    // deleteImage: (state, action: PayloadAction<number>) => {
    //   state.data = state.data.filter(image => image.id !== action.payload);
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchImages.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchImages.fulfilled,
        (state, action: PayloadAction<Image[]>) => {
          state.status = 'succeeded';
          state.data = action.payload;
        },
      )
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

// export const {deleteImage} = imageSlice.actions;

export default imageSlice.reducer;
