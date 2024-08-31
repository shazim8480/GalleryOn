import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {fetchImages} from '../redux/imageSlice';

const useFetchImages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {data, status, error} = useSelector((state: RootState) => state.images);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImages());
    }
  }, [status, dispatch]);

  return {data, status, error};
};

export default useFetchImages;
