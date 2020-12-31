(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        email: null,
        password: null
      },
      errors: {}
    };
  },
  mounted: function mounted() {},
  methods: {
    login: function login() {
      var _this = this;

      try {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', this.user).then(function (res) {
          localStorage.setItem('CurrentUser', JSON.stringify(res.data));
        })["catch"](function (e) {
          _this.errors = e.response.data;
          console.log(_this.errors);
        });
      } catch (e) {
        cosole.log(e);
        this.errors = e;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginForm.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);", ""]);

// module
exports.push([module.i, "\n*:focus {\n    outline: none;\n}\nbody {\n    margin: 0;\n    padding: 0;\n    background: #DDD;\n    font-size: 16px;\n    color: #222;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n}\n#login-box {\n    position: relative;\n    margin: 5% auto;\n    width: 600px;\n    height: 400px;\n    background: #FFF;\n    border-radius: 2px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n.left {\n    position: absolute;\n    top: 0;\n    left: 0;\n    box-sizing: border-box;\n    padding: 40px;\n    width: 300px;\n    height: 400px;\n}\nh1 {\n    margin: 0 0 20px 0;\n    font-weight: 300;\n    font-size: 28px;\n}\ninput[type=\"email\"],\ninput[type=\"password\"] {\n    display: block;\n    box-sizing: border-box;\n    margin-bottom: 20px;\n    padding: 4px;\n    width: 220px;\n    height: 32px;\n    border: none;\n    border-bottom: 1px solid #AAA;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    font-size: 15px;\n    transition: 0.2s ease;\n}\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus {\n    border-bottom: 2px solid #16a085;\n    color: #16a085;\n    transition: 0.2s ease;\n}\ninput[type=\"submit\"] {\n    margin-top: 28px;\n    width: 120px;\n    height: 32px;\n    background: #16a085;\n    border: none;\n    border-radius: 2px;\n    color: #FFF;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    text-transform: uppercase;\n    transition: 0.1s ease;\n    cursor: pointer;\n}\ninput[type=\"submit\"]:hover,\ninput[type=\"submit\"]:focus {\n    opacity: 0.8;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n    transition: 0.1s ease;\n}\ninput[type=\"submit\"]:active {\n    opacity: 1;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n    transition: 0.1s ease;\n}\n.or {\n    position: absolute;\n    top: 180px;\n    left: 280px;\n    width: 40px;\n    height: 40px;\n    background: #DDD;\n    border-radius: 50%;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n    line-height: 40px;\n    text-align: center;\n}\n.right {\n    position: absolute;\n    top: 0;\n    right: 0;\n    box-sizing: border-box;\n    padding: 40px;\n    width: 300px;\n    height: 400px;\n    /*background: url('public/background/main.jpg');*/\n    background-size: cover;\n    background-position: center;\n    border-radius: 0 2px 2px 0;\n}\n.right .loginwith {\n    display: block;\n    margin-bottom: 40px;\n    font-size: 28px;\n    color: #FFF;\n    text-align: center;\n}\nbutton.social-signin {\n    margin-bottom: 20px;\n    width: 220px;\n    height: 36px;\n    border: none;\n    border-radius: 2px;\n    color: #FFF;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    transition: 0.2s ease;\n    cursor: pointer;\n}\nbutton.social-signin:hover,\nbutton.social-signin:focus {\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n    transition: 0.2s ease;\n}\nbutton.social-signin:active {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n    transition: 0.2s ease;\n}\nbutton.social-signin.facebook {\n    background: #32508E;\n}\nbutton.social-signin.twitter {\n    background: #55ACEE;\n}\nbutton.social-signin.google {\n    background: #DD4B39;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginForm.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginForm.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "login-box" } }, [
    _c("div", { staticClass: "left" }, [
      _c("h1", [_vm._v("Sign up")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.user.email,
            expression: "user.email"
          }
        ],
        attrs: { type: "email", name: "email", placeholder: "E-mail" },
        domProps: { value: _vm.user.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.user, "email", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.user.password,
            expression: "user.password"
          }
        ],
        attrs: { type: "password", name: "password", placeholder: "Password" },
        domProps: { value: _vm.user.password },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.user, "password", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "submit", name: "signup_submit", value: "Login" },
        on: {
          click: function($event) {
            return _vm.login()
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "or" }, [_vm._v("OR")])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("span", { staticClass: "loginwith" }, [
        _vm._v("Sign in with"),
        _c("br"),
        _vm._v("social network")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "social-signin facebook" }, [
        _vm._v("Log in with facebook")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "social-signin twitter" }, [
        _vm._v("Log in with Twitter")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "social-signin google" }, [
        _vm._v("Log in with Google+")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/LoginForm.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/LoginForm.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=12a98f72& */ "./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72&");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./resources/js/components/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoginForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/LoginForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoginForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoginForm.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/LoginForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoginForm.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/LoginForm.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=template&id=12a98f72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);