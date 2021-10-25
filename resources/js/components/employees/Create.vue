<template>
    <div>

            <div class="container">
  <form @submit.prevent="storeEmployee()">
    <h3>Creating new Employee</h3>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="first">First Name</label>
          <input type="text" v-model="form.first_name" class="form-control" placeholder="" id="first">
        </div>
      </div>
      <!--  col-md-6   -->

      <div class="col-md-6">
        <div class="form-group">
          <label for="last">Last Name</label>
          <input type="text" v-model="form.last_name" class="form-control" placeholder="" id="last">
        </div>
      </div>
      <!--  col-md-6   -->
    </div>


    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="company">Middle Name</label>
          <input type="text" v-model="form.middle_name" class="form-control" placeholder="" id="company">
        </div>


      </div>
      <!--  col-md-6   -->

      <div class="col-md-6">

        <div class="form-group">
          <label for="phone">Zip Code</label>
          <input type="tel" v-model="form.zip_code" class="form-control" id="phone" placeholder="phone">
        </div>
      </div>
      <!--  col-md-6   -->
    </div>
    <!--  row   -->


    <div class="row">
      <div class="col-md-6">

        <div class="form-group">
          <label for="email">Birthday</label>

          <DatePicker input-class="form-control" v-model="form.birthday" :inline="true">

          </DatePicker>
        </div>
      </div>
      <!--  col-md-6   -->

      <div class="col-md-6">
       <div class="form-group">
          <label for="email">Date Hired</label>

          <DatePicker input-class="form-control" v-model="form.date_hired">

          </DatePicker>


        </div>

      </div>
      <!--  col-md-6   -->
    </div>
    <!--  row   -->

     <div class="row">
      <div class="col-md-6">

        <div class="form-group">
          <label for="email">Departement</label>
         <select v-model="form.departement_id" class="form-control">
             <option v-for="departement in departements" :key="departement.id" :value="departement.id">{{ departement.name }}</option>
         </select>
        </div>
      </div>
      <!--  col-md-6   -->

      <div class="col-md-6">

        <div class="form-group">
          <label for="email">Country</label>
         <select  class="form-control" v-model="form.country_id" @change="getStates()">
             <option v-for="country in countries"  :key="country.id" :value="country.id">{{ country.name }}</option>
         </select>
        </div>

      </div>
      <!--  col-md-6   -->
    </div>
     <div class="row">
      <div class="col-md-6">

        <div class="form-group">
          <label for="email">State</label>
         <select v-model="form.state_id" class="form-control" @change="getCities()">
             <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
         </select>
        </div>
      </div>
      <!--  col-md-6   -->

      <div class="col-md-6">

        <div class="form-group">
          <label for="email">City</label>
         <select v-model="form.city_id" class="form-control">
             <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
         </select>
        </div>

      </div>
      <!--  col-md-6   -->
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Adress</label>
                <input type="text" v-model="form.address" class="form-control">
            </div>
        </div>

    </div>




    <button class="btn btn-primary">Save</button>
  </form>
</div>



    </div>
</template>

<script>


import DatePicker from "vuejs-datepicker";

import moment from "moment";

export default {

    components:
    {
        DatePicker

    },

    data() {
        return {

            countries : [],
            states: [],
            cities: [],
            departements: [],


            form: {
                country_id: '',
                state_id: '',
                city_id: '',
                departement_id: '',
                birthday: '',
                date_hired: '',
                address: '',
                zip_code: '',
                first_name: '',
                last_name: '',
                middle_name: '',

            },

             message: '',
             showMessage: false,


        }

    },

    created()
    {

        this.getCountries();
        this.getDepartements();

    },

    methods: {

        getCountries()
        {
            axios
               .get('/api/employees/get-countries')

               .then(res => {

                   this.countries = res.data;

               })
               .catch(error => {
                   console.log(error)
               })
        },

        getStates()
        {
           axios
              .get('/api/employees/' +this.form.country_id+ '/get-states')

              .then(res => {

                  this.states = res.data;

              })

              .catch(error => {
                  console.log(error)
              })
        },

        getCities()
        {
            axios
               .get('/api/employees/' +this.form.state_id+ '/get-cities')

               .then(res => {

                   this.cities = res.data;

               })

               .catch(error => {
                   console.log(error)
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
        },

        storeEmployee()
        {
            axios
               .post('/api/employees', {

                   first_name: this.form.first_name,
                   last_name: this.form.last_name,
                   middle_name: this.form.middle_name,
                   address: this.form.address,
                   zip_code: this.form.zip_code,
                   birthday: this.format_date(this.form.birthday),
                   date_hired: this.format_date(this.form.date_hired),
                   country_id: this.form.country_id,
                   departement_id: this.form.departement_id,
                   state_id: this.form.state_id,
                   city_id: this.form.city_id

               })

               .then(res => {
                   console.log(res.data.message)

                   this.message = res.data.message

                   this.showMessage = true

                   this.$router.push({  name: 'EmployeesIndex' })
               })

               .catch(error => {
                   console.log(error)
               })
        },

       format_date(value)
       {
           if(value)
           {
               return moment(String(value)).format("YYYYMMDD");
           }
       },


    },

}
</script>
