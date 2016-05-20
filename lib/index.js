'use strict';

/**
 * Creates an m-by-n matrix in which all entries are set to the specified element.
 * @throws {Error} Illegal argument exception
 * @param   {number} m    row count
 * @param   {number} n    column count
 * @param   {object} e    element
 * @returns {Array}  an m-by-n matrix in which all entries are set to the specified element
 */
function matrix(m, n, e) {
  var a;
  var i;
  var j;
  var mat = [];

  m = Math.max(m >> 0, 0);
  n = Math.max(n >> 0, 0);

  if (e === undefined) {
    throw new Error('Illegal argument exception: element must be defined');
  }

  for (i = 0; i < m; i++) {
    a = [];
    for (j = 0; j < n; j++) {
      a[j] = e;
    }
    mat[i] = a;
  }

  return mat;
}

module.exports = matrix;
