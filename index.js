/**
 * @file Padding.js
 * @author simpart
 */

/**
 * @class layout.Padding
 * @brief padding layout class
 */
mofron.layout.Padding = class extends mofron.Layout {

    constructor (tp,val,mlt) {
        try {
            super();
            this.name('Padding');
            this.prmOpt(tp, val, mlt);
            this.getParam().check(
                (t) => {
                    try {
                        if ( ('string' != (typeof t)) ||
                             ( ('top'    != t) &&
                               ('right'  != t) &&
                               ('bottom' != t) &&
                               ('left'   != t) ) ) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                (v) => {
                    try {
                        if ('string' !== (typeof v) && ('number' !== typeof v)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                (m) => {
                    try {
                        if (undefined === m) {
                            return false;
                        }
                        if ('boolean' !== (typeof m)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            let type   = this.value()[0];
            let px_val = this.value()[1];
            let pd     = (null === type) ? 'padding' : 'padding-' + type;
            let style  = {};
            style[pd]  = px_val + 'px';
            tgt.adom().style(style);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Padding;
/* end of file */
