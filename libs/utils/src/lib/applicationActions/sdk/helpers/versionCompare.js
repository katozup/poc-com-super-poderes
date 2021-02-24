/* eslint-disable no-console */

export default function versionCompare(left, right) {
  console.log('### left', left);
  console.log('### right', right);

  if (left && /\./i.test(left) && right && /\./i.test(right)) {
    const a = left.split('.');
    const b = right.split('.');
    const len = Math.max(a.length, b.length);

    console.log('### if left right', { a, b, len });

    for (let i = 0; i < len; i += 1) {
      if (
        (a[i] && !b[i] && parseInt(a[i], 10) > 0) ||
        parseInt(a[i], 10) > parseInt(b[i], 10)
      ) {
        return 1;
      }
      if (
        (b[i] && !a[i] && parseInt(b[i], 10) > 0) ||
        parseInt(a[i], 10) < parseInt(b[i], 10)
      ) {
        return -1;
      }
    }
    return 0;
  }
  return false;
}
