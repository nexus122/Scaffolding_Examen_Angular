import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanWhiteSpace'
})
export class CleanWhiteSpacePipe implements PipeTransform {

  transform(urlParameter: string): string  {
    urlParameter = urlParameter.replace(/\s+/g, '-')
    return urlParameter;
  }

}
