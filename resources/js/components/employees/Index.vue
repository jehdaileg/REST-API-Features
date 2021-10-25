<template>
    <div>


<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h4 class="h3 mb-0 text-gray-800"> Employes Section</h4></div>

        <div v-show="showMessage">
             <div class="alert alert-success">{{ message }}</div>
        </div>




    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between">
                        <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">

                        <div class="input-group">
                            <input type="search" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" v-model="search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-outline-success">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                            <div class="col">

                                  <select v-model="SelectedDepartement" class="form-control">
                                       <option v-for="departement in departements" :key="departement.id" :value="departement.id">{{ departement.name }}</option>
                                  </select>

                            </div>
                        </div>
                    </form>

                    <router-link :to="{ name: 'EmployeesCreate' }" class="float-right btn btn-primary"><i class="fa fa-plus"></i>Create</router-link>

                </div>
            </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Adress</th>
                                <th>Department</th>
                                <th>Country Code</th>
                                <th>Manage</th>

                            </tr>
                        </thead>

                        <tbody>

                                <tr v-for="employee in employees" :key="employee.id">
                                    <td>{{ employee.id }}</td>
                                    <td>{{ employee.first_name }}</td>
                                    <td>{{ employee.last_name }}</td>
                                    <td>{{ employee.address }}</td>
                                    <td> {{ employee.departement.name }}</td>
                                    <td>{{ employee.country.country_code }}</td>
                                    <td class="text-align-center flex justify-between">

                                         <router-link :to="{ name: 'EmployeesEdit', params: {id: employee.id} }">Edit</router-link>

                                        <button class="btn btn-danger" @click="deleteEmployee(employee.id)">Delete</button>
                                    </td>
                                </tr>


                        </tbody>
                    </table>
                </div>

                <div class="card-footer">
                    Something here
                </div>
            </div>
        </div>
    </div>


    </div>
</template>

<script>
export default {

    data() {
        return {
            employees: [],
            showMessage: false,
            message: '',
            SelectedDepartement: '',
            departements: [],
            search: '',


        }
    },

    watch: {

        search()
        {
            this.getEmployees()

        },

        SelectedDepartement()
        {
            this.getEmployees()
        },


    },

    created()
    {
        this.getEmployees();
        this.getDepartements();

    },
    methods: {
        getEmployees()
        {
            axios
               .get('/api/employees', {
                   params: {

                       search: this.search,
                       departement_id: this.SelectedDepartement

                       }
               })

               .then(res => {
                   this.employees = res.data.data

                   console.log(this.employees);
               })

               .catch(error => {
                   console.log(error)
               })

        },

        deleteEmployee(id)
        {
           axios
              .delete('/api/employees/' +id)

              .then(res => {

                  this.message = res.data

                  this.showMessage = true

                  this.getEmployees()
              })
        },

        getDepartements()
        {
            axios
               .get('/api/employees/get-departments')

               .then(res => {

                   this.departements = res.data;
               })

               .catch(error => {
                   console.log(error)
               })
        }


       }

}


</script>
