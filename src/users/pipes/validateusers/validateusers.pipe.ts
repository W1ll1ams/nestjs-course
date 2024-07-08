import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateusersPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const ageNumber = parseInt(value.age, 10);
    if (isNaN(ageNumber)) {
      throw new HttpException(
        'La edad debe ser un numero.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return { ...value, age: ageNumber };
  }
}
