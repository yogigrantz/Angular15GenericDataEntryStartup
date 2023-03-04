import { Injectable } from '@angular/core';
import { ModalComponentXL } from '../modalComponents/modal.component-xl';


@Injectable({ providedIn: 'root' })
export class ModalServiceXL {
    private modals: ModalComponentXL[] = [];

    public reset() {
        this.modals = [];
    }

    add(modal: ModalComponentXL) {
        // ensure component has a unique id attribute
        if (!modal.id || this.modals.find(x => x.id === modal.id)) {
            //throw new Error('modal must have a unique id attribute');
        }
        else
            this.modals.push(modal);
    }

    remove(modal: ModalComponentXL) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x === modal);
    }

    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);

        if (!modal) {
            throw new Error(`modal '${id}' not found`);
        }

        modal.open();
    }

    close() {
        // close the modal that is currently open
        const modal = this.modals.find(x => x.isOpen);
        modal?.close();
    }
}
