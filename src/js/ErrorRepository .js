export default class ErrorRepository {
  constructor() {
    this.repo = new Map([
      [1, 'Error number one'],
      [2, 'Error number two'],
      [3, 'Error number three'],
      [4, 'Error number four'],
    ]);
  }

  translate(code) {
    if (this.repo.has(code)) {
      return this.repo.get(code);
    } return 'Unknown error';
  }
}
