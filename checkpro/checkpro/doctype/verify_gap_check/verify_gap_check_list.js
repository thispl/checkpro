frappe.listview_settings['Verify Gap Check'] = {

    onload: function (listview) {
        listview.page.add_action_item(__("Allocate Check"), function () {
            let d = new frappe.ui.Dialog({
                title: 'Check Allocation',
                fields: [
                    {
                        label: 'Check Eecutive',
                        fieldname: 'check_exec',
                        fieldtype: 'Link',
                        options: 'User'
                    },

                ],
                primary_action_label: 'Assign',
                primary_action(values) {
                    var method = "checkpro.checkpro.doctype.verify_gap_check.verify_gap_check.edu_check"
                    var doctype = listview.doctype
                    console.log(values.check_exec)

                    listview.call_for_selected_items(method, { 'exe': values.check_exec, 'doctype': listview.doctype });
                }
            });

            d.show();

        });

    },
};
