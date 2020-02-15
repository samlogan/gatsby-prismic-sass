import React from 'react';
import * as Slices from 'slices';

const Slice = props => {
  const { data } = props;
  const { slice_type: sliceType } = data;

  // Handle null slice_type prop
  if (!sliceType) {
    console.error('Please pass a slice_type from your template to the Slice component');
    return null;
  }

  // Convert slice type from snake_case to TitleCase
  const sliceName = sliceType.split('_')
    .map(item => item.charAt(0).toUpperCase() + item.substring(1))
    .join('');

  // Get the slice component
  const CustomSlice = Slices[sliceName];

  // Handle missing exported Slice
  if (!CustomSlice) {
    console.error(`Can't find Slice ${sliceName}, are you sure it exists in the slices directory?`);
  }

  // Return Slice
  return <CustomSlice {...props} />;
};

export default Slice;
