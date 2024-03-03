export const jsonStringifyWithBigint = (
  obj: unknown,
  space?: Parameters<typeof JSON.stringify>[2],
) => {
  return JSON.stringify(
    obj,
    (key, value) => (typeof value === 'bigint' ? value.toString() : value), // return everything else unchanged
    space,
  );
};
