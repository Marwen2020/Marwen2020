sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
    //"sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel ) {
        "use strict";

        return Controller.extend("code.demo.training.controller.View1", {
            onInit: function () {
                var oCurrency = new JSONModel({ CURR : "EUR"}); 
                var helloPanel = new JSONModel({ "recepient" : {"name" : "Marwen"  }} ) 
                this.getView().setModel(oCurrency,"Currency");
                helloPanel.setProperty("/recipient/name")
                this.getView().setModel(helloPanel , "helloPanel")
               

            },  
            onItemSelected : function(oEvent,index) { 
                var sPath = oEvent.getSource().getBindingContext().getPath()
                var oPanel = this.byId("Panel")
                oPanel.bindElement(sPath)
                oPanel.setVisible()
                var oImage = this.byId("Image")
                var oModel = this.getOwnerComponent().getModel()
            },
            onSearch : function(oEvent){ 
                var aFilter = []
                var filterValue1 = oEvent.getParameter("selectionSet")[0].getValue(); 
                var filterValue2= oEvent.getParameter("selectionSet")[1].getValue(); 
                if (filterValue1) { 
                    var filter = new sap.ui.model.Filter("ProductName" , "EQ"  , filterValue1)
                    aFilter.push(filter)
                }
                if (filterValue2) { 
                    var filter = new sap.ui.model.Filter("Category/CategoryName" , "EQ"  , filterValue2)
                    aFilter.push(filter)
                }
                var oList = this.byId("List").getBinding("items")
                oList.filter(aFilter)
            }
        });
    });
