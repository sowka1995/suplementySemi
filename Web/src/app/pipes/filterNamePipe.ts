import { Injectable , Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterName'
})
@Injectable()
export class FilterNamePipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        if (args.toString() === '' ) {
            return items;
        } else {
            return items.filter(item => item.name.toLowerCase().indexOf(args.toString().toLowerCase()) !== -1);
        }
    }
}