import { Routes } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { DataBinding } from './components/data-binding/data-binding';
import { EmployeeList } from './components/employee-list/employee-list';
import { StructuralDiv } from './components/directive/structural-div/structural-div';
import { AttributeDirective } from './components/directive/attribute-directive/attribute-directive';
import { Reactive } from './components/reactive/reactive';

export const routes: Routes = [
    { path: 'add-employee', component: AddEmployee },
    { path: 'data-binding', component: DataBinding },
    { path: 'employee-list', component: EmployeeList },
    { path: 'structural-div', component: StructuralDiv },
    { path: 'attribute-directive', component: AttributeDirective },
    { path: 'reactive', component: Reactive}
];
