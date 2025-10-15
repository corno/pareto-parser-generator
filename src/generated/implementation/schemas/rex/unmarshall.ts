import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/rex/data_types/target"
import * as _i_signatures from "../../../interface/schemas/rex/unmarshall"


export const Char_Class_Option: _i_signatures._T_Char_Class_Option = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'char': ($): _i_out._T_Char_Class_Option.SG => ['char', _i_generic.process_text(
                $,
                null
            )],
            'char code': ($): _i_out._T_Char_Class_Option.SG => ['char code', _i_generic.process_text(
                $,
                null
            )],
            'char code range': ($): _i_out._T_Char_Class_Option.SG => ['char code range', _i_generic.process_group(
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
            'char range': ($): _i_out._T_Char_Class_Option.SG => ['char range', _i_generic.process_group(
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
export const Context: _i_signatures._T_Context = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'caret name': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "caret name",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const Context_Expression: _i_signatures._T_Context_Expression = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'lexical sequence': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "lexical sequence",
                }
            ), ($) => Lexical_Sequence(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'lookahead': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "lookahead",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => Lexical_Item(
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
export const Equivalence_Char_Range: _i_signatures._T_Equivalence_Char_Range = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'char class': ($): _i_out._T_Equivalence_Char_Range.SG => ['char class', Char_Class_Option(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'string literal': ($): _i_out._T_Equivalence_Char_Range.SG => ['string literal', _i_generic.process_text(
                $,
                null
            )],
        }),
    }
)
export const Grammar: _i_signatures._T_Grammar = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'encore': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "encore",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_unconstrained_list(
                        $,
                        {
                            'value': ($) => Processing_Instruction(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            ),
                        }
                    ),
                }
            )),
            'lexical definition': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "lexical definition",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'lexical rules': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "lexical rules",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_unconstrained_state_group(
                                            $,
                                            {
                                                'states': _pa.dictionary_literal({
                                                    'equivalence': ($): _i_out._T_Grammar.lexical_definition.O.lexical_rules.L.SG => ['equivalence', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'left hand side': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "left hand side",
                                                                    }
                                                                ), ($) => Equivalence_Char_Range(
                                                                    $,
                                                                    {
                                                                        'value deserializers': $p['value deserializers'],
                                                                    }
                                                                )),
                                                                'look ahead': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "look ahead",
                                                                    }
                                                                ), ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'char class': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "char class",
                                                                                }
                                                                            ), ($) => Char_Class_Option(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )),
                                                                        }),
                                                                    }
                                                                )),
                                                                'right hand side': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "right hand side",
                                                                    }
                                                                ), ($) => Equivalence_Char_Range(
                                                                    $,
                                                                    {
                                                                        'value deserializers': $p['value deserializers'],
                                                                    }
                                                                )),
                                                            }),
                                                        }
                                                    )],
                                                    'lexical production': ($): _i_out._T_Grammar.lexical_definition.O.lexical_rules.L.SG => ['lexical production', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'context choice': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "context choice",
                                                                    }
                                                                ), ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'first': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "first",
                                                                                }
                                                                            ), ($) => Context_Expression(
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
                                                                                    'value': ($) => Context_Expression(
                                                                                        $,
                                                                                        {
                                                                                            'value deserializers': $p['value deserializers'],
                                                                                        }
                                                                                    ),
                                                                                }
                                                                            )),
                                                                        }),
                                                                    }
                                                                )),
                                                                'name': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "name",
                                                                    }
                                                                ), ($) => _i_generic.process_unconstrained_state_group(
                                                                    $,
                                                                    {
                                                                        'states': _pa.dictionary_literal({
                                                                            'dot': ($): _i_out._T_Grammar.lexical_definition.O.lexical_rules.L.SG.lexical_production.name.SG => ['dot', _i_generic.process_nothing(
                                                                                $,
                                                                                null
                                                                            )],
                                                                            'name': ($): _i_out._T_Grammar.lexical_definition.O.lexical_rules.L.SG.lexical_production.name.SG => ['name', _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )],
                                                                        }),
                                                                    }
                                                                )),
                                                                'non greedy': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "non greedy",
                                                                    }
                                                                ), ($) => _i_generic.process_boolean(
                                                                    $,
                                                                    {
                                                                        'deserializer': $p['value deserializers']['boolean'],
                                                                    }
                                                                )),
                                                                'options': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "options",
                                                                    }
                                                                ), ($) => _i_generic.process_unconstrained_list(
                                                                    $,
                                                                    {
                                                                        'value': ($) => Whitespace_Option(
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
                                                    'lookahead list': ($): _i_out._T_Grammar.lexical_definition.O.lexical_rules.L.SG => ['lookahead list', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'name': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "name",
                                                                    }
                                                                ), ($) => _i_generic.process_text(
                                                                    $,
                                                                    null
                                                                )),
                                                                'names or strings': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "names or strings",
                                                                    }
                                                                ), ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'first': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "first",
                                                                                }
                                                                            ), ($) => Name_Or_String(
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
                                                                                    'value': ($) => Name_Or_String(
                                                                                        $,
                                                                                        {
                                                                                            'value deserializers': $p['value deserializers'],
                                                                                        }
                                                                                    ),
                                                                                }
                                                                            )),
                                                                        }),
                                                                    }
                                                                )),
                                                            }),
                                                        }
                                                    )],
                                                    'preference': ($): _i_out._T_Grammar.lexical_definition.O.lexical_rules.L.SG => ['preference', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'base': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "base",
                                                                    }
                                                                ), ($) => Name_Or_String(
                                                                    $,
                                                                    {
                                                                        'value deserializers': $p['value deserializers'],
                                                                    }
                                                                )),
                                                                'direction': _pa.cc(_i_generic.get_entry(
                                                                    $,
                                                                    {
                                                                        'key': "direction",
                                                                    }
                                                                ), ($) => _i_generic.process_unconstrained_state_group(
                                                                    $,
                                                                    {
                                                                        'states': _pa.dictionary_literal({
                                                                            '<<': ($): _i_out._T_Grammar.lexical_definition.O.lexical_rules.L.SG.preference.direction.SG => ['<<', _i_generic.process_group(
                                                                                $,
                                                                                {
                                                                                    'properties': ($) => ({
                                                                                        'first': _pa.cc(_i_generic.get_entry(
                                                                                            $,
                                                                                            {
                                                                                                'key': "first",
                                                                                            }
                                                                                        ), ($) => Name_Or_String(
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
                                                                                                'value': ($) => Name_Or_String(
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
                                                                            '>>': ($): _i_out._T_Grammar.lexical_definition.O.lexical_rules.L.SG.preference.direction.SG => ['>>', _i_generic.process_group(
                                                                                $,
                                                                                {
                                                                                    'properties': ($) => ({
                                                                                        'first': _pa.cc(_i_generic.get_entry(
                                                                                            $,
                                                                                            {
                                                                                                'key': "first",
                                                                                            }
                                                                                        ), ($) => Name_Or_String(
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
                                                                                                'value': ($) => Name_Or_String(
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
            'prolog': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "prolog",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => Processing_Instruction(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )),
            'syntax definition': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "syntax definition",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'syntax productions': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "syntax productions",
                            }
                        ), ($) => _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'first': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "first",
                                        }
                                    ), ($) => Syntax_Production(
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
                                            'value': ($) => Syntax_Production(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            ),
                                        }
                                    )),
                                }),
                            }
                        )),
                    }),
                }
            )),
        }),
    }
)
export const Lexical_Item: _i_signatures._T_Lexical_Item = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'lexical primary': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "lexical primary",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'char class': ($): _i_out._T_Lexical_Item.lexical_primary.SG => ['char class', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'items': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "items",
                                        }
                                    ), ($) => _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'first': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "first",
                                                    }
                                                ), ($) => Char_Class_Option(
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
                                                        'value': ($) => Char_Class_Option(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        ),
                                                    }
                                                )),
                                            }),
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
                                }),
                            }
                        )],
                        'char code': ($): _i_out._T_Lexical_Item.lexical_primary.SG => ['char code', _i_generic.process_text(
                            $,
                            null
                        )],
                        'end of input': ($): _i_out._T_Lexical_Item.lexical_primary.SG => ['end of input', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'name or any character': ($): _i_out._T_Lexical_Item.lexical_primary.SG => ['name or any character', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'any character ': ($): _i_out._T_Lexical_Item.lexical_primary.SG.name_or_any_character.SG => ['any character ', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'name': ($): _i_out._T_Lexical_Item.lexical_primary.SG.name_or_any_character.SG => ['name', _i_generic.process_text(
                                        $,
                                        null
                                    )],
                                }),
                            }
                        )],
                        'parenthesized': ($): _i_out._T_Lexical_Item.lexical_primary.SG => ['parenthesized', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'lexical choice': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "lexical choice",
                                        }
                                    ), ($) => _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'first': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "first",
                                                    }
                                                ), ($) => Lexical_Sequence(
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
                                                        'value': ($) => Lexical_Sequence(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        ),
                                                    }
                                                )),
                                            }),
                                        }
                                    )),
                                }),
                            }
                        )],
                        'string literal': ($): _i_out._T_Lexical_Item.lexical_primary.SG => ['string literal', _i_generic.process_text(
                            $,
                            null
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
                                'more than one': ($): _i_out._T_Lexical_Item.quantifier.O.SG => ['more than one', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'multiple': ($): _i_out._T_Lexical_Item.quantifier.O.SG => ['multiple', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                'optional': ($): _i_out._T_Lexical_Item.quantifier.O.SG => ['optional', _i_generic.process_nothing(
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
export const Lexical_Sequence: _i_signatures._T_Lexical_Sequence = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'first': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "first",
                }
            ), ($) => Lexical_Item(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'second': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "second",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'exclusion': ($): _i_out._T_Lexical_Sequence.second.SG => ['exclusion', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'what to exclude': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "what to exclude",
                                        }
                                    ), ($) => Lexical_Item(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'multiple': ($): _i_out._T_Lexical_Sequence.second.SG => ['multiple', _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => Lexical_Item(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                ),
                            }
                        )],
                    }),
                }
            )),
        }),
    }
)
export const Name_Or_String: _i_signatures._T_Name_Or_String = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'name': ($): _i_out._T_Name_Or_String.SG => ['name', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'context': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "context",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => Context(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                ),
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
            )],
            'string': ($): _i_out._T_Name_Or_String.SG => ['string', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'context': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "context",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => Context(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                ),
                            }
                        )),
                        'string literal': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "string literal",
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
export const Processing_Instruction: _i_signatures._T_Processing_Instruction = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'dir pi contents': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "dir pi contents",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
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
)
export const Syntax_Choice: _i_signatures._T_Syntax_Choice = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'first': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "first",
                }
            ), ($) => Syntax_Sequence(
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
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary_literal({
                                'ordered': ($): _i_out._T_Syntax_Choice.rest.O.SG => ['ordered', _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'sequence': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "sequence",
                                                }
                                            ), ($) => _i_generic.process_unconstrained_list(
                                                $,
                                                {
                                                    'value': ($) => Syntax_Sequence(
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
                                'unordered': ($): _i_out._T_Syntax_Choice.rest.O.SG => ['unordered', _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'sequence': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "sequence",
                                                }
                                            ), ($) => _i_generic.process_unconstrained_list(
                                                $,
                                                {
                                                    'value': ($) => Syntax_Sequence(
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
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Syntax_Production: _i_signatures._T_Syntax_Production = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'name': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "name",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'options': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "options",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => Whitespace_Option(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )),
            'syntax choice': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "syntax choice",
                }
            ), ($) => Syntax_Choice(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Syntax_Sequence: _i_signatures._T_Syntax_Sequence = ($, $p) => _i_generic.process_group(
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
                                                    '*': ($): _i_out._T_Syntax_Sequence.items.L.quantifier.O.SG => ['*', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    '+': ($): _i_out._T_Syntax_Sequence.items.L.quantifier.O.SG => ['+', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    '?': ($): _i_out._T_Syntax_Sequence.items.L.quantifier.O.SG => ['?', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'syntax primary': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "syntax primary",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'name or string': ($): _i_out._T_Syntax_Sequence.items.L.syntax_primary.SG => ['name or string', Name_Or_String(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )],
                                            'parenthesized': ($): _i_out._T_Syntax_Sequence.items.L.syntax_primary.SG => ['parenthesized', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'syntax choice': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "syntax choice",
                                                            }
                                                        ), ($) => Syntax_Choice(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'processing instruction': ($): _i_out._T_Syntax_Sequence.items.L.syntax_primary.SG => ['processing instruction', Processing_Instruction(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )],
                                        }),
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
export const Whitespace_Option: _i_signatures._T_Whitespace_Option = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'definition': ($): _i_out._T_Whitespace_Option.SG => ['definition', _i_generic.process_nothing(
                $,
                null
            )],
            'explicit': ($): _i_out._T_Whitespace_Option.SG => ['explicit', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
