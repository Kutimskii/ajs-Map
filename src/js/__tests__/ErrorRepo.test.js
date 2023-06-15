import ErrorRepository from '../ErrorRepository ';

test.each([
  [1, 'Error number one'],
  [2, 'Error number two'],
  [3, 'Error number three'],
  [4, 'Error number four'],
  [5, 'Unknown error'],
])('method translate', (code, expected) => {
  const result = new ErrorRepository();
  expect(result.translate(code)).toEqual(expected);
});
