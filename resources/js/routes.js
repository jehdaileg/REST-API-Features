import Index from "./components/employees/Index.vue";
import Edit from "./components/employees/Edit.vue";
//import Create from "./components/employees/Create.vue";


export const routes = [

    {
        path: "/employees",
        name: "EmployeesIndex",
        component: Index
    },

    {
        path: "/employees/create",
        name: "EmployeesCreate",
        component: () => import("./components/employees/Create.vue")
    },

    {
        path: "/employees/:id",
        name: "EmployeesEdit",
        //component: () => import("./components/employees/Edit.vue")
        component: Edit
    },


    {
        path: "/testVuejs",
        name: "Test Component",
        component: ()=> import("./components/employees/Test")

    }

];
