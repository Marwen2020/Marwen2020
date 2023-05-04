sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, FilterOperator ) {
        "use strict";

        return Controller.extend("code.demo.training.controller.View1", {
            onInit: function () {
                var oCurrency = new JSONModel({ CURR : "EUR"}); 
                var helloPanel = new JSONModel({ "recepient" : {"name" : "Marwen"  }} ) 
                this.getView().setModel(oCurrency,"Currency");
                helloPanel.setProperty("/recipient/name")
                this.getView().setModel(helloPanel , "helloPanel")
               

            },  
            onSubmit : function(oEvent) { 
                

            },
            onSearch : function(oEvent){ 
                var aFilter = []
                var filterValue = oEvent.getParameter("selectionSet")[0].getValue(); 
                if (filterValue) { 
                    var filter = new sap.ui.model.Filter("ProductName" , FilterOperator.EQ , filterValue)
                    aFilter.push(filter)
                }
                var oList = this.byId("List").getBinding("items")
                oList.filter(aFilter)
              
                
            }
        });
    });
