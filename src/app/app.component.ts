import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>Interpolation Examples</h1>

    <h2>Interpolation: </h2>
  <h4> {{FirstName + ' ' + LastName}} </h4> 
  <h2>Interpolation with hardcoded String: </h2>
  <h4> {{'First Name:' +FirstName+'Last Name: '+LastName}} </h4>      
  <h2>Angular Interpolation with Expression:</h2>
  <h4> 10 + 5 * 7 - 6 = {{ 10 + 5 * 7 -6 }}</h4>   
  <h2>Angular Interpolation to combine the expression with the property value:</h2>   
  <h4> Bonus = {{Salary * .10 }}</h4> 
  <p>We have Salary property and we need to apply .10 as a bonus. So, here we can combine the expression with the property using Angular Interpolation.</p>
  <h2>Interpolation in Angular with Ternary Operator:</h2>   
  <h4>Last Name : {{ LastName ? LastName : 'Not Available' }}</h4>
  <p>If last name is null, then Not Available will be displayed(LastName: any = null;)</p>
  <h2>Method Interpolation in Angular Application:</h2>  
  <h4>Full Name : {{ GetFullName() }} </h4>
  <p> Here a class method is created to get the full name and is called using interpolation. </p>
  <h2>Displaying Images using Angular Interpolation:</h2>  
  <img src = {{ImagePath}} /> 
  <hr>
  <h1>Property Binding Examples</h1>
  <h2>How to use the Property Binding in Angular Application?</h2>
  <span [innerHTML] = 'Title' ></span>   
  <h2>Achieving the same thing using Angular Interpolation and Property Binding(ImagePath): </h2>
  <img [src] = 'ImagePath' />  
  <h2>Working with non-string (Boolean) data: </h2>
  <p>When you are working with non-string values like Boolean to set the property value of an HTML element, then you need to use property binding instead of interpolation. For example, if you want to disable a button click event, then you need to set the disabled property of the button element using the property binding.</p>
  <button [disabled] = 'IsDisabledClick' > Cick Here </button>   
  <h2>Angular Interpolation with Boolean data:</h2>
  <button disabled = {{IsDisabledClick} > Cick Here </button> 
  <p>irrespective of the IsDisabledClick property value of the component class, the button is always disabled. Here we set the IsDisabled property value as false but when you run the application, it will not allow the button to be clickable. </p>  
  <h2>DOM & HTML Element Attribute Difference </h2>
  <input id='inputId' type='text' value='Shyam'>    

  <hr>
  <h1>Event Binding Examples</h1>
  <h2>Angular Event Binding Example(Button Click):   </h2>
  <p>every time you click the button, ‘Button is Clicked’ message is displayed on the console.

</p>
  <button (click)="onClick()">Click Me </button>
<h2>Angular Event Binding Example(Button Click): </h2>
<table>
  <thead>
      <tr>
          <th attr.colspan="{{ColumnSpan}}">
              Student Details
          </th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>First Name</td>
          <td>{{FirstName}}</td>
      </tr>
      <tr>
          <td>Last Name</td>
          <td>{{LastName}}</td>
      </tr>
      <tr *ngIf='ShowDetails'>
          <td>Branch</td>
          <td>{{Branch}}</td>
      </tr>
      <tr *ngIf='ShowDetails'>
          <td>Mobile</td>
          <td>{{Mobile}}</td>
      </tr>
      <tr *ngIf='ShowDetails'>
          <td>Gender</td>
          <td>{{Gender}}</td>
      </tr>
      <tr *ngIf='ShowDetails'>
          <td>Age</td>
          <td>{{Age}}</td>
      </tr>
  </tbody>
</table>
<br/>
<button (click)='ToggleDetails()'>
  {{ShowDetails ? 'Hide' : 'Show'}} Details
</button>
<hr>
<h2>Example of Angular Two Way Data Binding - Two Way Data binding using ngModel Directive </h2>
<div>
             Name : <input [(ngModel)] = 'Name'>  
              <br>
              You entered : {{Name}}
            </div>

            <hr>
<h2>Example of Angular Container and Nested Components </h2>  
<p> To display the list of students, we will create a component called StudentListComponent and to display the radio buttons along with their total count of students, we will create a component with the name StudentCountComponet.

Then we will nest the StudentCountComponet within the StudentListComponet and when we do so, then the StudentCountComponet becomes the nested component or the child component and StudentListComponet becomes the container component or parent component.
So the nesting is like: AppComponent -> App Student List -> Student Count Component
</p>        
            <app-student-list></app-student-list>
</div>`
})
export class AppComponent {
  ColumnSpan: number = 2;
  Name: string = 'Enter your name';
  FirstName: string = 'Shyam ';
  LastName: any = 'Krishna';
  Branch: string = 'CSE';
    Mobile: number = 9876543210
    Gender: string = 'Male';
    Age: number = 28;
    ShowDetails: boolean = false;
    ToggleDetails(): void {
        this.ShowDetails = !this.ShowDetails;
    }





  Salary : number = 100000;
  Title : string = "Welcome to My Angular Learning";
  IsDisabledClick : boolean = false;
  ImagePath : string = "https://dotnettutorials.net/wp-content/uploads/2019/09/cropped-dotnettutorials.png";
  GetFullName() : string{
    return this.FirstName + ' ' + this.LastName;
  }

  onClick(): void {
    console.log('Button is Clicked');
   }
}
