import * as _edata from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _in from "../../generated/interface/schemas/rex_wrapper/data_types/source"
import * as _out from "../../generated/interface/schemas/rex/data_types/source"

type Non_Empty_Array<T> = {
    'first': T,
    'rest': _et.Array<T>,
}

import { $$ as op_list_is_empty } from "pareto-standard-operations/dist/impure/list/is_empty"
import { $$ as op_remove_first_element } from "pareto-standard-operations/dist/impure/list/remove_first_element"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_flatten_list } from "pareto-standard-operations/dist/pure/list/flatten"


const op_list_2_non_empty_list = <T>(
    $: _et.Array<T>,
    $p: {
        'default element': () => T
    }
): Non_Empty_Array<T> => {
    return op_remove_first_element($).transform(
        ($) => ({
            'first': $.element,
            'rest': $.array,
        }),
        () => ({
            'first': $p['default element'](),
            'rest': _ea.array_literal([]),
        })
    )
}

export const Grammar: _ea.Guaranteed_Transformation_Without_Parameters<_in.Grammar, _out.Grammar> = (
    $
) => {
    return {
        'prolog': _ea.array_literal([]),
        'syntax definition': {
            'syntax productions': op_list_2_non_empty_list<_out.Syntax_Production>(
                op_dictionary_to_list($.types).map(($): _out.Syntax_Production => ({
                    'name': $.key,
                    'syntax choice': Type_Node($.value.node),
                    'options': _ea.array_literal([])
                })),
                {
                    'default element': () => ({
                        'name': "Default",
                        'syntax choice': {
                            'first': {
                                'items': _ea.array_literal([]),
                            },
                            'rest': _ea.not_set(),

                        },
                        'options': _ea.array_literal([])
                    })
                }
            )
        },
        'lexical definition': _ea.set({
            'lexical rules': _ea.array_literal([])
        }),
        'encore': _ea.not_set(),
    }
}

export const Type_Node: _ea.Guaranteed_Transformation_Without_Parameters<_in.Type_Node, _out.Syntax_Choice> = (
    $
) => {
    return _ea.cc($.type, ($): _out.Syntax_Choice => {
        switch ($[0]) {
            case 'group': return _ea.ss($, ($) =>  op_flatten_list(_ea.array_literal([
                
            ])))
            case 'list': return _ea.ss($, ($) => op_flatten_list(_ea.array_literal([
                
            ])))
            case 'optional': return _ea.ss($, ($) => op_flatten_list(_ea.array_literal([

            ])))
            case 'state group': return _ea.ss($, ($) => op_flatten_list(_ea.array_literal([

            ])))
            case 'text': return _ea.ss($, ($) => op_flatten_list(_ea.array_literal([

            ])))
            default: return _ea.au($[0])
        }
    })
}