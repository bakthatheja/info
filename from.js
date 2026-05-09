BT = window.BT || { __namespace: true, __typeName: "BT" };
BT.PCF = BT.PCF || { __namespace: true, __typeName: "BT.PCF" };
BT.PCF.Main =
  BT.PCF.Main ||
  (() => {
    "use strict";
    const Fields = {
      Attributes: {
        Approve: "btr_approve",
        Reject: "btr_reject",
      },
    };
    const onload = (executionContext) => {
      const formContext = executionContext.getFormContext();
      formContext.getControl(Fields.Attributes.Approve)?.addEventHandler("mycustomEvent", () => {
        approveButtonHandler(executionContext);
      });
      formContext.getControl(Fields.Attributes.Reject)?.addEventHandler("mycustomEvent", () => {
        rejectButtonHandler(executionContext);
      });
    };
    const approveButtonHandler = (executionContext) => {
      const formContext = executionContext.getFormContext();
      Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "Ok", text: "Approved button click.", title: "Alert" });
    };
    const rejectButtonHandler = (executionContext) => {
      const formContext = executionContext.getFormContext();
      Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "Ok", text: "Rejected button click.", title: "Alert" });
    };
    return {
      OnLoad: onload,
      __namespace: true,
      __typeName: "BT.PCF.Main",
    };
  })();
