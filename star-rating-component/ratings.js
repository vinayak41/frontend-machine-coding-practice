class Ratings {
  constructor() {
    this._value = 0;
    this._previewValue = 0;
  }

  get rating() {
    return this._value;
  }

  set rating(value) {
    this._value = value;
  }

  get previewValue() {
    return this._previewValue;
  }

  set previewValue(value) {
    this._previewValue = value;
  }
}

export default Ratings;
