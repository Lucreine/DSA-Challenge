/*
 * Create an array to store n elements of type Int8, Int16, Int32 or Float64.
 * Do not use the regular JS array! Look into binary arrays.
 */
export const createArray = (type, size) => {
  switch (type) {
    case 'Int8':
      return new Int8Array(size);
    case 'Int16':
      return new Int16Array(size);
    case 'Int32':
      return new Int32Array(size);
    case 'Float64':
      return new Float64Array(size);
    default:
      console.log('Unsupported array type');
  }
};
