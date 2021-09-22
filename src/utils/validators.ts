export class Validators {
  static emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/;
  static passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
}
