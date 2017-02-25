/**
 * @file Padding.js
 * @author simpart
 */

/**
 * @class layout.Padding
 * @brief padding layout class
 */
mofron.layout.Padding = class extends mofron.Layout {

    constructor (tp,val) {
        try {
            super();
            this.name('Padding');
            
            this.m_type  = null;
            this.m_value = null;
            
            if ('object' === typeof tp) {
                this.prmOpt(tp);
            } else {
                this.type(tp);
                this.value(val);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            var pd = 'padding';
            if (null !== this.type()) {
                pd += '-' + this.type();
            }
            tgt.vdom().style(pd, this.value() + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (tp) {
        try {
            if (undefined === tp) {
                /* getter */
                return this.m_type;
            }
            /* setter */
            if ( ('string' != (typeof tp)) ||
                 ( (''       != tp) &&
                   ('top'    != tp) &&
                   ('right'  != tp) &&
                   ('bottom' != tp) &&
                   ('left'   != tp) ) ) {
                throw new Error('invalid parameter');
            }
            this.m_type = tp;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    value (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.m_value;
            }
            /* setter */
            if ( (null === val) ||
                 ('number' !== (typeof val)) ) {
                throw new Error('invalid parameter');
            }
            this.m_value = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Padding;
