import {
    ValidationOptions,
    registerDecorator,
    ValidationArguments,
  } from 'class-validator';
  
  export function IsDateOfBirth(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        name: 'isDateOfBirth',
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        validator: {
          validate(value: any, args: ValidationArguments) {
            if (!value) {
              return true; // Empty values are handled by @IsNotEmpty
            }
  
            const currentDate = new Date();
            const inputDate = new Date(value);
  
            if (isNaN(inputDate.getTime())) {
              return false; // Invalid date format
            }
  
            return inputDate <= currentDate;
          },
          defaultMessage(args: ValidationArguments) {
            return `${args.property} should be a valid date of birth and not greater than today's date.`;
          },
        },
      });
    };
  }
  