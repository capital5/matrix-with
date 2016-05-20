'use strict';

var assert = require('assert');
var matrixWith = require('../lib');

describe('matrix-with', function () {
  it('should not create a matrix without initializer parameter', function () {
    assert.throws(() => {
      matrixWith(1, 1);
    }, /element must be defined/, 'did not throw with expected message');
  });

  it('should create a 0 x 0 empty matrix', function () {
    assert.deepStrictEqual(matrixWith(0, 0, 0), []);
    assert.deepStrictEqual(matrixWith(0, -1, 0), []);
    assert.deepStrictEqual(matrixWith(-1, 0, 0), []);
    assert.deepStrictEqual(matrixWith(-1, -1, 0), []);
    assert.deepStrictEqual(matrixWith(0, 3, 0), []);
  });

  it('should create a 3 x 0 empty column vector', function () {
    assert.deepStrictEqual(matrixWith(3, 0, 0), [[], [], []]);
  });

  it('should create a 1 x 3 row vector with all entries set to 0', function () {
    assert.deepStrictEqual(matrixWith(1, 3, 0), [[0, 0, 0]]);
  });

  it('should create a 3 x 1 column vector with all entries set to "0"', function () {
    assert.deepStrictEqual(matrixWith(3, 1, '0'), [['0'], ['0'], ['0']]);
  });

  it('should create a 3 x 3 square matrix with all entries set to 1', function () {
    assert.deepStrictEqual(matrixWith(3, 3, 1), [[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
  });

  it('should create a 2 x 2 square matrix with all entries set to false', function () {
    assert.deepStrictEqual(matrixWith(2, 2, false), [[false, false], [false, false]]);
  });
});
