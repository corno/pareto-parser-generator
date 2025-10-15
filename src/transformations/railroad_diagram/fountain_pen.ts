import * as _edata from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _in from "../../generated/interface/schemas/railroad_diagram/data_types/source"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


// import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/impure/dictionary/to_list_sorted_by_code_point"

export const Grammar: _ea.Guaranteed_Transformation_Without_Parameters<_in.Grammar, _out.Block> = (
    $
) => {
    return sh.block([
        sh.b.sub($.productions.map(($) => sh.b.nested_line([
            sh.l.snippet($.name),//FIX needs to be escaped
            sh.l.snippet(" ::= "),
            _ea.cc($.definition, ($) => {
                switch ($[0]) {
                    case 'choice': return _ea.ss($, ($) => Choice($))
                    case 'link': return _ea.ss($, ($) => sh.l.sub([
                        sh.l.snippet("["),
                        sh.l.snippet($.url),
                        sh.l.snippet("]"),
                    ]))
                    default: return _ea.au($[0])
                }
            }),
        ])))
    ])
}

const Choice: _ea.Guaranteed_Transformation_Without_Parameters<_in.Choice, _out.Line_Part> = ($) => {
    return sh.l.sub([
        Composite_Expression($.first),
        sh.l.sub($.rest.map(($) => sh.l.sub([
            sh.l.snippet(" | "),
            Composite_Expression($)
        ])))
    ])
}

const Composite_Expression: _ea.Guaranteed_Transformation_Without_Parameters<_in.Composite_Expression, _out.Line_Part> = ($) => {

}