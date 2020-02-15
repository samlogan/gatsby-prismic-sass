import React from 'react';
import * as Slices from 'slices';

const Slice = props => {
  const { data } = props;
  const { slice_type: sliceType } = data;
  // Convert slice type from snake_case to TitleCase
  if (!sliceType) return null;
  const sliceName = sliceType.split('_')
    .map(item => item.charAt(0).toUpperCase() + item.substring(1))
    .join('');
  const CustomSlice = Slices[sliceName];
  return <CustomSlice {...props} />;
};

export default Slice;
