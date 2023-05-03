sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("code.demo.training.controller.View1", {
            onInit: function () {
                var oCurrency = new JSONModel({ CURR : "EUR"}); 
                this.getView().setModel(oCurrency,"Currency");

            },  
            onPressHelloWorld : function() { 
               // alert("Hello")
                sap.m.MessageToast.show("Hello World")
    
            }
        });
    });
