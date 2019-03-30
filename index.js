/**
 * @file Padding.js
 * @author simpart
 */
const mf = require('mofron');

/**
 * @class layout.Padding
 * @brief padding layout class
 */
mf.layout.Padding = class extends mf.Layout {

    constructor (po, p2, p3) {
        try {
            super();
            this.name('Padding');
            this.prmMap(['type', 'value', 'multiple']);
            this.prmOpt(po, p2, p3);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            let pd = (null === this.type()) ? 'padding' : 'padding-' + this.type();
            let style = {};
            if ((true === this.multiple()) && ('number' === typeof this.value().value())) {
                style[pd] = this.value().value() * (idx+1) + this.value().type();
            } else {
                style[pd] = this.value().toString();
            }
            tgt.adom().style(style);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try { return this.member('type', ['top', 'right', 'bottom', 'left'], prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (prm) {
        try {
            return this.member(
                'value',
                ['Size'],
                (undefined !== prm) ? mf.func.getSize(prm) : prm
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    multiple (prm) {
        try { return this.member('multiple', 'boolean', prm, true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.layout.Padding;
/* end of file */
