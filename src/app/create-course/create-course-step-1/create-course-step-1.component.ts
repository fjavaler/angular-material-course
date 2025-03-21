import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

const SAMPLE_TEXT="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales maximus ante vel eleifend. Phasellus sollicitudin enim in luctus volutpat. Aliquam rutrum elit non sem scelerisque, vel accumsan nisi dictum. Nunc non dolor vel lorem finibus consequat ac eget nulla. Integer porta aliquet rutrum. Aenean semper elementum nulla, nec viverra nisl. Sed eleifend ut eros sed eleifend. Praesent justo enim, congue at dolor a, tempor malesuada nisl. Donec et est porttitor, pulvinar lacus nec, pellentesque nisi. Aenean egestas rhoncus sem, vitae condimentum magna tempor nec. Donec cursus placerat lacus id tempor. Nulla efficitur nunc ac scelerisque suscipit. Vestibulum mattis nisl eget diam tristique, at sollicitudin libero malesuada. Morbi vehicula odio tempor, cursus orci eu, ullamcorper turpis. Nullam sit amet eros erat. Aliquam vehicula commodo mollis."


@Component({
    selector: "create-course-step-1",
    templateUrl: "create-course-step-1.component.html",
    styleUrls: ["create-course-step-1.component.scss"],
    standalone: false
})
export class CreateCourseStep1Component {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(1990, 0, 1), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SAMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });

  // View refers to the calendar view modes which can be month or year.
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    const date = cellDate.getDate();

    if (view == 'month') {
      return (date == 1) ? 'highlight-date second-css-class' : "";
    }

    return "";
  }

  constructor(private readonly fb: UntypedFormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
