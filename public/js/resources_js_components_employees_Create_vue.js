(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_employees_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employees/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employees/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DatePicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      countries: [],
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
        middle_name: ''
      },
      message: '',
      showMessage: false
    };
  },
  created: function created() {
    this.getCountries();
    this.getDepartements();
  },
  methods: {
    getCountries: function getCountries() {
      var _this = this;

      axios.get('/api/employees/get-countries').then(function (res) {
        _this.countries = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getStates: function getStates() {
      var _this2 = this;

      axios.get('/api/employees/' + this.form.country_id + '/get-states').then(function (res) {
        _this2.states = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getCities: function getCities() {
      var _this3 = this;

      axios.get('/api/employees/' + this.form.state_id + '/get-cities').then(function (res) {
        _this3.cities = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getDepartements: function getDepartements() {
      var _this4 = this;

      axios.get('/api/employees/get-departments').then(function (res) {
        _this4.departements = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    storeEmployee: function storeEmployee() {
      var _this5 = this;

      axios.post('/api/employees', {
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
      }).then(function (res) {
        console.log(res.data.message);
        _this5.message = res.data.message;
        _this5.showMessage = true;

        _this5.$router.push({
          name: 'EmployeesIndex'
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    format_date: function format_date(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).format("YYYYMMDD");
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/employees/Create.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/employees/Create.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_41906a31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=41906a31& */ "./resources/js/components/employees/Create.vue?vue&type=template&id=41906a31&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/employees/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Create_vue_vue_type_template_id_41906a31___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_41906a31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/employees/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/employees/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/employees/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employees/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/employees/Create.vue?vue&type=template&id=41906a31&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/employees/Create.vue?vue&type=template&id=41906a31& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_41906a31___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_41906a31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_41906a31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=41906a31& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employees/Create.vue?vue&type=template&id=41906a31&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employees/Create.vue?vue&type=template&id=41906a31&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employees/Create.vue?vue&type=template&id=41906a31& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.storeEmployee()
            }
          }
        },
        [
          _c("h3", [_vm._v("Creating new Employee")]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "first" } }, [
                  _vm._v("First Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.first_name,
                      expression: "form.first_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "", id: "first" },
                  domProps: { value: _vm.form.first_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "first_name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "last" } }, [_vm._v("Last Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.last_name,
                      expression: "form.last_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "", id: "last" },
                  domProps: { value: _vm.form.last_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "last_name", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "company" } }, [
                  _vm._v("Middle Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.middle_name,
                      expression: "form.middle_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "", id: "company" },
                  domProps: { value: _vm.form.middle_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "middle_name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "phone" } }, [_vm._v("Zip Code")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.zip_code,
                      expression: "form.zip_code"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "tel", id: "phone", placeholder: "phone" },
                  domProps: { value: _vm.form.zip_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "zip_code", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "email" } }, [
                    _vm._v("Birthday")
                  ]),
                  _vm._v(" "),
                  _c("DatePicker", {
                    attrs: { "input-class": "form-control", inline: true },
                    model: {
                      value: _vm.form.birthday,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "birthday", $$v)
                      },
                      expression: "form.birthday"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "email" } }, [
                    _vm._v("Date Hired")
                  ]),
                  _vm._v(" "),
                  _c("DatePicker", {
                    attrs: { "input-class": "form-control" },
                    model: {
                      value: _vm.form.date_hired,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date_hired", $$v)
                      },
                      expression: "form.date_hired"
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "email" } }, [
                  _vm._v("Departement")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.departement_id,
                        expression: "form.departement_id"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "departement_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.departements, function(departement) {
                    return _c(
                      "option",
                      {
                        key: departement.id,
                        domProps: { value: departement.id }
                      },
                      [_vm._v(_vm._s(departement.name))]
                    )
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "email" } }, [_vm._v("Country")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.country_id,
                        expression: "form.country_id"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "country_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function($event) {
                          return _vm.getStates()
                        }
                      ]
                    }
                  },
                  _vm._l(_vm.countries, function(country) {
                    return _c(
                      "option",
                      { key: country.id, domProps: { value: country.id } },
                      [_vm._v(_vm._s(country.name))]
                    )
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "email" } }, [_vm._v("State")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.state_id,
                        expression: "form.state_id"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "state_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function($event) {
                          return _vm.getCities()
                        }
                      ]
                    }
                  },
                  _vm._l(_vm.states, function(state) {
                    return _c(
                      "option",
                      { key: state.id, domProps: { value: state.id } },
                      [_vm._v(_vm._s(state.name))]
                    )
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "email" } }, [_vm._v("City")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.city_id,
                        expression: "form.city_id"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "city_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.cities, function(city) {
                    return _c(
                      "option",
                      { key: city.id, domProps: { value: city.id } },
                      [_vm._v(_vm._s(city.name))]
                    )
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Adress")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.address,
                      expression: "form.address"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "address", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Save")])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);