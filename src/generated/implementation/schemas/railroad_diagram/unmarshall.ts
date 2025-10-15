import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/railroad_diagram/data_types/target"
import * as _i_signatures from "../../../interface/schemas/railroad_diagram/unmarshall"


export const Char_Class_Element: _i_signatures._T_Char_Class_Element = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'char': ($): _i_out._T_Char_Class_Element.SG => ['char', _i_generic.process_text(
                $,
                null
            )],
            'char code': ($): _i_out._T_Char_Class_Element.SG => ['char code', Char_Code(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'char code range': ($): _i_out._T_Char_Class_Element.SG => ['char code range', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'from': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "from",
                            }
                        ), ($) => Char_Code(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'to': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "to",
                            }
                        ), ($) => Char_Code(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            'char range': ($): _i_out._T_Char_Class_Element.SG => ['char range', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'from': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "from",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                        'to': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "to",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
        }),
    }
)
export const Char_Code: _i_signatures._T_Char_Code = ($, $p) => _i_generic.process_text(
    $,
    null
)
export const Choice: _i_signatures._T_Choice = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'first': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "first",
                }
            ), ($) => Composite_Expression(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'rest': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "rest",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => Composite_Expression(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )),
        }),
    }
)
export const Composite_Expression: _i_signatures._T_Composite_Expression = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'items': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "items",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'item': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "item",
                                    }
                                ), ($) => Item(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'tail': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "tail",
                                    }
                                ), ($) => _i_generic.process_optional(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_unconstrained_state_group(
                                            $,
                                            {
                                                'states': _pa.dictionary_literal({
                                                    'siblings': ($): _i_out._T_Composite_Expression.items.L.tail.O.SG => ['siblings', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'items': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "items",
                                                                    }
                                                                ), ($) => _i_generic.process_unconstrained_list(
                                                                    $,
                                                                    {
                                                                        'value': ($) => Item(
                                                                            $,
                                                                            {
                                                                                'value deserializers': $p['value deserializers'],
                                                                            }
                                                                        ),
                                                                    }
                                                                )),
                                                            }),
                                                        }
                                                    )],
                                                    'special': ($): _i_out._T_Composite_Expression.items.L.tail.O.SG => ['special', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'item': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "item",
                                                                    }
                                                                ), ($) => Item(
                                                                    $,
                                                                    {
                                                                        'value deserializers': $p['value deserializers'],
                                                                    }
                                                                )),
                                                                'operator': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "operator",
                                                                    }
                                                                ), ($) => _i_generic.process_unconstrained_state_group(
                                                                    $,
                                                                    {
                                                                        'states': _pa.dictionary_literal({
                                                                            '**': ($): _i_out._T_Composite_Expression.items.L.tail.O.SG.special.operator.SG => ['**', _i_generic.process_nothing(
                                                                                $,
                                                                                null
                                                                            )],
                                                                            '++': ($): _i_out._T_Composite_Expression.items.L.tail.O.SG.special.operator.SG => ['++', _i_generic.process_nothing(
                                                                                $,
                                                                                null
                                                                            )],
                                                                            '-': ($): _i_out._T_Composite_Expression.items.L.tail.O.SG.special.operator.SG => ['-', _i_generic.process_nothing(
                                                                                $,
                                                                                null
                                                                            )],
                                                                        }),
                                                                    }
                                                                )),
                                                            }),
                                                        }
                                                    )],
                                                }),
                                            }
                                        ),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Grammar: _i_signatures._T_Grammar = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'productions': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "productions",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'definition': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "definition",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'choice': ($): _i_out._T_Grammar.productions.L.definition.SG => ['choice', Choice(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )],
                                            'link': ($): _i_out._T_Grammar.productions.L.definition.SG => ['link', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'url': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "url",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                                'name': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "name",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Item: _i_signatures._T_Item = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'primary': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "primary",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'char class': ($): _i_out._T_Item.primary.SG => ['char class', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'first': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "first",
                                        }
                                    ), ($) => Char_Class_Element(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'negated': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "negated",
                                        }
                                    ), ($) => _i_generic.process_boolean(
                                        $,
                                        {
                                            'deserializer': $p['value deserializers']['boolean'],
                                        }
                                    )),
                                    'rest': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "rest",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_list(
                                        $,
                                        {
                                            'value': ($) => Char_Class_Element(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            ),
                                        }
                                    )),
                                }),
                            }
                        )],
                        'char code': ($): _i_out._T_Item.primary.SG => ['char code', Char_Code(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        'choice': ($): _i_out._T_Item.primary.SG => ['choice', Choice(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        'name': ($): _i_out._T_Item.primary.SG => ['name', _i_generic.process_text(
                            $,
                            null
                        )],
                        'string literal': ($): _i_out._T_Item.primary.SG => ['string literal', String_Literal(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                    }),
                }
            )),
            'quantifier': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "quantifier",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary_literal({
                                '*': ($): _i_out._T_Item.quantifier.O.SG => ['*', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                '+': ($): _i_out._T_Item.quantifier.O.SG => ['+', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                '?': ($): _i_out._T_Item.quantifier.O.SG => ['?', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const String_Literal: _i_signatures._T_String_Literal = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'delimiter': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "delimiter",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'apostrophe': ($): _i_out._T_String_Literal.delimiter.SG => ['apostrophe', _i_generic.process_text(
                            $,
                            null
                        )],
                        'quote': ($): _i_out._T_String_Literal.delimiter.SG => ['quote', _i_generic.process_text(
                            $,
                            null
                        )],
                    }),
                }
            )),
        }),
    }
)
