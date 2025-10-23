import * as _edata from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _in from "../../generated/interface/schemas/rex_wrapper/data_types/source"
import * as _out from "astn/dist/generated/interface/schemas/astn_schema/data_types/source"

import { $$ as op_list_is_empty } from "pareto-standard-operations/dist/impure/list/is_empty"
import { $$ as op_remove_first_element } from "pareto-standard-operations/dist/impure/list/remove_first_element"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_flatten_list } from "pareto-standard-operations/dist/pure/list/flatten"



export const Grammar: _ea.Guaranteed_Transformation_Without_Parameters<_in.Grammar, _out.Schema> = (
    $
) => {
    return {
        'globals': {
            'text types': _ea.dictionary_literal({}),
        },
        'imports': _ea.dictionary_literal({}),
        'types': $.types.map(($): _out.Type => ({
            'node': Type_Node($.node),
        })),
    }
}

export const Type_Node : _ea.Guaranteed_Transformation_Without_Parameters<_in.Type_Node, _out.Type_Node> = (
    $
) => {
    return _ea.cc($.type, ($) => {
        switch ($[0]) {
            case 'list':
            case 'component':
            case 'group':
            case 'optional':
            case 'state group':
            case 'text':
            default: return _ea.au($[0])
        }
    })
}