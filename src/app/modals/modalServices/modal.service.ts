import { Injectable } from '@angular/core';
import { ModalComponent } from '../modalComponents';


@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: ModalComponent[] = [];

    add(modal: ModalComponent) {
        // ensure component has a unique id attribute
        console.log("# of existing Modals : " + this.modals.length);
        if (!modal.id || this.modals.find(x => x.id === modal.id)) {
            this.close();
        }
        else
        {
            this.modals.push(modal);
        }
    }

    remove(modal: ModalComponent) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x === modal);
    }

    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);

        if (!modal) {
            throw new Error(`modal '${id}' not found`);
        }

        this.close();

        modal.open();
    }

    close() {
        // close the modal that is currently open
        const modal = this.modals.find(x => x.isOpen);
        modal?.close();
    }
}
