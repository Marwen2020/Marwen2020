sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("code.demo.training.controller.View1", {
            onInit: function () {

            },  
            onPressHelloWorld : function() { 
               // alert("Hello")
                sap.m.MessageToast.show("Hello World")
    
            }
        });
    });
