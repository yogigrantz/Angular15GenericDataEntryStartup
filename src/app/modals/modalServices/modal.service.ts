import { Injectable } from '@angular/core';
import { ModalComponent } from '../modalComponents';


@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: ModalComponent[] = [];
    public modalAlreadyExists = false;

    public reset() {
        this.modals = [];
    }

    add(modal: ModalComponent) {
        // ensure component has a unique id attribute
        console.log("# of existing Modals : " + this.modals.length);
        if (!modal.id || this.modals.find(x => x.id === modal.id)) 
        {
            this.modalAlreadyExists = true;
        }
        else
        {
            this.modalAlreadyExists = false;
            this.modals.push(modal);
        }
    }

    remove(modal: ModalComponent) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x === modal);
    }

    open(id: string) {
        // open modal specified by id
        let modal = this.modals.find(x => x.id === id);

        if (!modal) {
            throw new Error(`modal '${id}' not found`);
        }

         modal.open();
    }

    close() {
        // close the modal that is currently open
        let modal = this.modals.find(x => x.isOpen);
        modal?.close();
    }
}
