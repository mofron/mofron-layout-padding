/**
 * @file Padding.js
 */

mofron.layout.Padding = class extends mofron.layout.Base {

    constructor (tp,v) {
        try {
            super();
            this.type = null;
            this.val  = null;
            
            var _tp = (tp === undefined) ? null : tp;
            var _v  = (v === undefined) ? null : v;
            
            if ( (null != _tp) && 
                 (null != _v) ) {
                if ( ('string' !== (typeof _tp)) ||
                     ('number' !== (typeof _v)) ) {
                    throw new Error('invalid parameter');
                }
                if ( ('top'    !== _tp) &&
                     ('right'  !== _tp) &&
                     ('bottom' !== _tp) &&
                     ('left'   !== _tp) ) {
                    throw new Error('invalid parameter');
                }
                
                this.type = _tp;
                this.val  = _v;
            } else if ( (null != _tp) &&
                        (null == _v) ) {
                if ('number' !== (typeof _tp)) {
                    throw new Error('invalid parameter');
                }
                this.val = _tp;
            } else {
                if ('number' !== (typeof _v)) {
                    throw new Error('invalid parameter');
                }
                this.val = _v;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutFunc (idx, tgt) {
        try {
            var pd = 'padding';
            if (null !== this.type) {
                pd += '-' + this.type;
            }
            tgt.getVdom().setStyle(pd, this.val + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
