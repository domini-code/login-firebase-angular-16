
interface ErrorMessage {
  [key: string]: string;
}

const errorMessages: ErrorMessage = {
  required: 'This field is required.',
  pattern: 'Email must be valid.',
  minlength: 'This field must be at least 5 characters long.',
};


export function validatorErrorMessage(validatorName: string): string {
  return errorMessages[validatorName] ?? '';
}
