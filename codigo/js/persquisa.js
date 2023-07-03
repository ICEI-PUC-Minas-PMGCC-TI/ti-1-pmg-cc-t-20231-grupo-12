function fuzzy(stack, needle) {
  let n = -1, l;
  stack = stack.toLowerCase();
  needle = needle.toLowerCase();
  for (let i = 0; l = needle[i++];) if (!~(n = stack.indexOf(l, n + 1))) return false;
  return true;
};