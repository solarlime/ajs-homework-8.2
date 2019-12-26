class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  // Вспомогательный метод
  addError(code, error) {
    this.errors.set(code, error);
    return `Added error: ${code}: ${error}`;
  }

  translate(code) {
    if (this.errors.get(code)) {
      return this.errors.get(code);
    }
    return 'Code does not exist. Add it at first';
  }
}

export default ErrorRepository;
