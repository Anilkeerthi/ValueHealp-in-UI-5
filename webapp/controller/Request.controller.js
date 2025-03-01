sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/comp/valuehelpdialog/ValueHelpDialog",
     "sap/m/Token"
], function (Controller, JSONModel, Fragment,ValueHelpDialog,Token) {
    "use strict";

    return Controller.extend("requestviewui5.controller.Request", {
        onInit: function () {
            var oModel = this.getOwnerComponent().getModel("jsonData");
            this.getView().setModel(oModel, "jsonModel");
            this.getView().getModel("jsonModel").setProperty("/imagePath", "../Assets/flow.png");
        },

        onClickStatus: function () {
            if (!this.oImageDialog) {
                Fragment.load({
                    id: this.getView().getId(),
                    name: "requestviewui5.view.Image", 
                    controller: this
                }).then(function (oDialog) {
                    this.oImageDialog = oDialog;
                    this.getView().addDependent(this.oImageDialog);
                    this.oImageDialog.open();
                }.bind(this));
            } else {
                this.oImageDialog.open();
            }
        },

        onCloseDialog: function () {
            if (this.oImageDialog) {
                this.oImageDialog.close();
            }
        },

        onDialogClose: function () {
            if (this.oImageDialog) {
                this.oImageDialog.destroy();
                this.oImageDialog = null;
            }
        },



        onValueHelpRequest: function (oEvent) {
            var oView = this.getView();
            var oInput = oEvent.getSource();
            
            // Create the ValueHelpDialog if it doesn't exist
            if (!this._oValueHelpDialog) {
                this._oValueHelpDialog = new sap.m.Dialog({
                    title: "Select Material Group",
                    contentWidth: "20%",
                    content: new sap.m.List({
                        id: "valueHelpList",
                        items: {
                            path: "jsonModel>/filters/0/materialGroups",
                            template: new sap.m.StandardListItem({
                                title: "{jsonModel>Name}",
                                type: "Active",
                                press: function (oEvent) {
                                    var oSelectedItem = oEvent.getSource();
                                    oInput.setValue(oSelectedItem.getTitle());
                                    this._oValueHelpDialog.close();
                                }.bind(this)
                            })
                        }
                    }),
                    beginButton: new sap.m.Button({
                        text: "Close",
                        press: function () {
                            this._oValueHelpDialog.close();
                        }.bind(this)
                    }),
                    afterClose: function () {
                        this._oValueHelpDialog.destroy(); // Clean up
                        this._oValueHelpDialog = null;
                    }.bind(this)
                });
                
                // Add the dialog as a dependent to the view
                oView.addDependent(this._oValueHelpDialog);
            }
        
            // Open the ValueHelpDialog
            this._oValueHelpDialog.open();
        },


        onValueHelpRequestPurchaseGroup: function (oEvent) {
            var oView = this.getView();
            var oInput = oEvent.getSource();
        
            // Create the ValueHelpDialog if it doesn't exist
            if (!this._oValueHelpDialog) {
                this._oValueHelpDialog = new sap.m.Dialog({
                    title: "Select Purchase Group",
                    contentWidth: "20%",
                    content: new sap.m.List({
                        id: "valueHelpListPurchaseGroup",
                        items: {
                            path: "jsonModel>/filters/1/purchaseGroups",
                            template: new sap.m.StandardListItem({
                                title: "{jsonModel>Name}",
                                type: "Active",
                                press: function (oEvent) {
                                    var oSelectedItem = oEvent.getSource();
                                    oInput.setValue(oSelectedItem.getTitle());
                                    this._oValueHelpDialog.close();
                                }.bind(this)
                            })
                        }
                    }),
                    beginButton: new sap.m.Button({
                        text: "Close",
                        press: function () {
                            this._oValueHelpDialog.close();
                        }.bind(this)
                    }),
                    afterClose: function () {
                        this._oValueHelpDialog.destroy(); // Clean up
                        this._oValueHelpDialog = null;
                    }.bind(this)
                });
        
                // Add the dialog as a dependent to the view
                oView.addDependent(this._oValueHelpDialog);
            }
        
            // Open the ValueHelpDialog
            this._oValueHelpDialog.open();
        },

        onValueHelpRequestRequestedFor: function (oEvent) {
            var oView = this.getView();
            var oInput = oEvent.getSource();
        
            // Create the ValueHelpDialog if it doesn't exist
            if (!this._oValueHelpDialog) {
                this._oValueHelpDialog = new sap.m.Dialog({
                    title: "Select Requested For",
                    contentWidth: "20%",
                    content: new sap.m.List({
                        id: "valueHelpListRequestedFor",
                        items: {
                            path: "jsonModel>/filters/2/requestedFor",
                            template: new sap.m.StandardListItem({
                                title: "{jsonModel>Name}",
                                type: "Active",
                                press: function (oEvent) {
                                    var oSelectedItem = oEvent.getSource();
                                    oInput.setValue(oSelectedItem.getTitle());
                                    this._oValueHelpDialog.close();
                                }.bind(this)
                            })
                        }
                    }),
                    beginButton: new sap.m.Button({
                        text: "Close",
                        press: function () {
                            this._oValueHelpDialog.close();
                        }.bind(this)
                    }),
                    afterClose: function () {
                        this._oValueHelpDialog.destroy(); // Clean up
                        this._oValueHelpDialog = null;
                    }.bind(this)
                });
        
                // Add the dialog as a dependent to the view
                oView.addDependent(this._oValueHelpDialog);
            }
        
            // Open the ValueHelpDialog
            this._oValueHelpDialog.open();
        },
        
        onValueHelpRequestRequestType: function (oEvent) {
            var oView = this.getView();
            var oInput = oEvent.getSource();
        
            // Create the ValueHelpDialog if it doesn't exist
            if (!this._oValueHelpDialog) {
                this._oValueHelpDialog = new sap.m.Dialog({
                    title: "Select Request Type",
                    contentWidth: "20%",
                    content: new sap.m.List({
                        id: "valueHelpListRequestType",
                        items: {
                            path: "jsonModel>/filters/3/requestTypes",
                            template: new sap.m.StandardListItem({
                                title: "{jsonModel>Type}",
                                type: "Active",
                                press: function (oEvent) {
                                    var oSelectedItem = oEvent.getSource();
                                    oInput.setValue(oSelectedItem.getTitle());
                                    this._oValueHelpDialog.close();
                                }.bind(this)
                            })
                        }
                    }),
                    beginButton: new sap.m.Button({
                        text: "Close",
                        press: function () {
                            this._oValueHelpDialog.close();
                        }.bind(this)
                    }),
                    afterClose: function () {
                        this._oValueHelpDialog.destroy(); // Clean up
                        this._oValueHelpDialog = null;
                    }.bind(this)
                });
        
                // Add the dialog as a dependent to the view
                oView.addDependent(this._oValueHelpDialog);
            }
        
            // Open the ValueHelpDialog
            this._oValueHelpDialog.open();
        },
        onValueHelpRequestCommodityType: function (oEvent) {
            var oView = this.getView();
            var oInput = oEvent.getSource();
        
            // Create the ValueHelpDialog if it doesn't exist
            if (!this._oValueHelpDialog) {
                this._oValueHelpDialog = new sap.m.Dialog({
                    title: "Select Commodity Type",
                    contentWidth: "20%",
                    content: new sap.m.List({
                        id: "valueHelpListCommodityType",
                        items: {
                            path: "jsonModel>/filters/4/commodityTypes",
                            template: new sap.m.StandardListItem({
                                title: "{jsonModel>Type}",
                                type: "Active",
                                press: function (oEvent) {
                                    var oSelectedItem = oEvent.getSource();
                                    oInput.setValue(oSelectedItem.getTitle());
                                    this._oValueHelpDialog.close();
                                }.bind(this)
                            })
                        }
                    }),
                    beginButton: new sap.m.Button({
                        text: "Close",
                        press: function () {
                            this._oValueHelpDialog.close();
                        }.bind(this)
                    }),
                    afterClose: function () {
                        this._oValueHelpDialog.destroy(); // Clean up
                        this._oValueHelpDialog = null;
                    }.bind(this)
                });
        
                // Add the dialog as a dependent to the view
                oView.addDependent(this._oValueHelpDialog);
            }
        
            // Open the ValueHelpDialog
            this._oValueHelpDialog.open();
        },

        onOpenImageFragment: function (oEvent) {
            // Get the context of the row where the button was pressed
            var oButton = oEvent.getSource();
            var oContext = oButton.getBindingContext("jsonModel");
            var sImagePath = oContext.getProperty("imagePath"); // Replace with the actual path to the image property

            // Create the fragment if it doesn't already exist
            if (!this._oImageFragment) {
                this._oImageFragment = Fragment.load({
                    id: this.getView().getId(),
                    name: "requestviewui5.view.Image", // Change to the actual fragment path
                    controller: this
                }).then(function (oFragment) {
                    this.getView().addDependent(oFragment);
                    oFragment.open(); // Open the fragment
                }.bind(this));
            } else {
                this._oImageFragment.then(function (oFragment) {
                    oFragment.open(); // Open the fragment if already created
                });
            }

            
            if (this._oImageFragment) {
                var oImage = this.byId("idOfYourImageControl"); // Replace with the ID of the image control in the fragment
                if (oImage) {
                    oImage.setSrc(sImagePath); // Set the image source
                }
            }
        }
        
        
    });
});
