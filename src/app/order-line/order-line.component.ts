import { Component } from '@angular/core';

@Component({
  selector: 'app-order-line',
  templateUrl: './order-line.component.html',
  styleUrls: ['./order-line.component.scss'],
})
export class OrderLineComponent {
  expectedShipDate: Date | null = null;
  salesOrderNumber: string = '';
  responseType: 'accept' | 'reject' | 'change' | null = 'accept';

  submit(form: any): void {
    if (form.valid) {
      console.log('Form submitted:', {
        salesOrderNumber: this.salesOrderNumber,
        expectedShipDate: this.expectedShipDate,
        responseType: this.responseType,
      });
      alert('Form submitted successfully!');
    } else {
      console.warn('Form invalid');
    }
  }

  onDateInput(event: any, ngModelControl: any) {
    const inputValue = event.target.value;
    const parsedDate = new Date(inputValue);
    const requestedDate = new Date('06-28-2018');

    let errors: any = { ...ngModelControl.errors };

    const isValidDate =
      parsedDate instanceof Date &&
      !isNaN(parsedDate.getTime()) &&
      /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(inputValue); // ensures MM/DD/YYYY format

    if (!isValidDate) {
      errors.invalidDate = true;
    } else if (parsedDate < requestedDate) {
      delete errors.invalidDate;
      errors.minDate = true;
    } else {
      delete errors.invalidDate;
      delete errors.minDate;
    }

    if (Object.keys(errors).length > 0) {
      ngModelControl.control.setErrors(errors);
    } else {
      ngModelControl.control.setErrors(null);
    }
  }
}
