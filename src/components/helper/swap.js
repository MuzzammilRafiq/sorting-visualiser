export const swap = async (arr, i1, i2) => {
  arr[i1] = arr[i1] ^ arr[i2];
  arr[i2] = arr[i1] ^ arr[i2];
  arr[i1] = arr[i1] ^ arr[i2];
};
