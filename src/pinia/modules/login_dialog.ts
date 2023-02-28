import {defineStore} from "pinia";

interface Login_dialog {
    isVisible: boolean
}

export const useDialogStore = defineStore({
    id: 'dialog',
    state: (): { dialog: Login_dialog | null } => ({
        dialog: {isVisible:false},
    }),
    getters: {
        getDialog(): Login_dialog | null {
            return this.dialog;
        },
    },
    actions: {
        close() {
            this.dialog={isVisible:false}
        },
        open(){
            this.dialog={isVisible:true}
        },
    },
});
