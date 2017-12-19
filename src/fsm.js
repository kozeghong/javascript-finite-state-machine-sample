export default class FSM {

    constructor () {
        this.STATE = {
            CLOSED: 'closed',
            OPENED: 'opened',
            LOCKED: 'locked'
        }
        this.ACTION = {
            OPEN: 'open',
            CLOSE: 'close',
            LOCK: 'lock',
            UNLOCK: 'unlock'
        }
        this.transitions = [
            { from: this.STATE.CLOSED, action: this.ACTION.OPEN, to: this.STATE.OPENED },
            { from: this.STATE.OPENED, action: this.ACTION.CLOSE, to: this.STATE.CLOSED },
            { from: this.STATE.CLOSED, action: this.ACTION.LOCK, to: this.STATE.LOCKED },
            { from: this.STATE.LOCKED, action: this.ACTION.UNLOCK, to: this.STATE.CLOSED }
        ]
        this.currentState = this.STATE.CLOSED
    }

    transit (action, options = {}) {
        const found = this.transitions.find(t => t.from === this.currentState && t.action === action)
        if (!found) return
        this.currentState = found.to
        switch (this.currentState) {
            case this.STATE.CLOSED:
                return this.STATE.CLOSED
                break
            case this.STATE.OPENED:
                return this.STATE.OPENED
                break
            case this.STATE.LOCKED:
                return this.STATE.LOCKED
                break
            default:
                break
        }
    }

    isState (state) {
        return state === this.currentState
    }

}
