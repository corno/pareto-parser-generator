import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/rex/marshall"


export const Char_Class_Option: _i_signatures._T_Char_Class_Option = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'char': return _pa.ss($, ($) => ({
            'state': "char",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'char code': return _pa.ss($, ($) => ({
            'state': "char code",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'char code range': return _pa.ss($, ($) => ({
            'state': "char code range",
            'value': ['verbose group', _pa.dictionary_literal({
                'from': _pa.cc($['from'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'to': _pa.cc($['to'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'char range': return _pa.ss($, ($) => ({
            'state': "char range",
            'value': ['verbose group', _pa.dictionary_literal({
                'from': _pa.cc($['from'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'to': _pa.cc($['to'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Context: _i_signatures._T_Context = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'caret name': _pa.cc($['caret name'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Context_Expression: _i_signatures._T_Context_Expression = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'lexical sequence': _pa.cc($['lexical sequence'], ($) => Lexical_Sequence(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'lookahead': _pa.cc($['lookahead'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', Lexical_Item(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]),
})]
export const Equivalence_Char_Range: _i_signatures._T_Equivalence_Char_Range = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'char class': return _pa.ss($, ($) => ({
            'state': "char class",
            'value': Char_Class_Option(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'string literal': return _pa.ss($, ($) => ({
            'state': "string literal",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Grammar: _i_signatures._T_Grammar = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'encore': _pa.cc($['encore'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['list', $.map(($) => Processing_Instruction(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        ))]],
        () => ['not set', null]
    )]),
    'lexical definition': _pa.cc($['lexical definition'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary_literal({
            'lexical rules': _pa.cc($['lexical rules'], ($) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'equivalence': return _pa.ss($, ($) => ({
                        'state': "equivalence",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'left hand side': _pa.cc($['left hand side'], ($) => Equivalence_Char_Range(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'look ahead': _pa.cc($['look ahead'], ($) => ['verbose group', _pa.dictionary_literal({
                                'char class': _pa.cc($['char class'], ($) => Char_Class_Option(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })]),
                            'right hand side': _pa.cc($['right hand side'], ($) => Equivalence_Char_Range(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })],
                    }))
                    case 'lexical production': return _pa.ss($, ($) => ({
                        'state': "lexical production",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'context choice': _pa.cc($['context choice'], ($) => ['verbose group', _pa.dictionary_literal({
                                'first': _pa.cc($['first'], ($) => Context_Expression(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'rest': _pa.cc($['rest'], ($) => ['list', $.map(($) => Context_Expression(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                ))]),
                            })]),
                            'name': _pa.cc($['name'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'dot': return _pa.ss($, ($) => ({
                                        'state': "dot",
                                        'value': ['nothing', null],
                                    }))
                                    case 'name': return _pa.ss($, ($) => ({
                                        'state': "name",
                                        'value': ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })]),
                            'non greedy': _pa.cc($['non greedy'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['boolean'](
                                    $,
                                    null
                                ),
                            })]),
                            'options': _pa.cc($['options'], ($) => ['list', $.map(($) => Whitespace_Option(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ))]),
                        })],
                    }))
                    case 'lookahead list': return _pa.ss($, ($) => ({
                        'state': "lookahead list",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'name': _pa.cc($['name'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'names or strings': _pa.cc($['names or strings'], ($) => ['verbose group', _pa.dictionary_literal({
                                'first': _pa.cc($['first'], ($) => Name_Or_String(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'rest': _pa.cc($['rest'], ($) => ['list', $.map(($) => Name_Or_String(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                ))]),
                            })]),
                        })],
                    }))
                    case 'preference': return _pa.ss($, ($) => ({
                        'state': "preference",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'base': _pa.cc($['base'], ($) => Name_Or_String(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'direction': _pa.cc($['direction'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case '<<': return _pa.ss($, ($) => ({
                                        'state': "<<",
                                        'value': ['verbose group', _pa.dictionary_literal({
                                            'first': _pa.cc($['first'], ($) => Name_Or_String(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'rest': _pa.cc($['rest'], ($) => ['list', $.map(($) => Name_Or_String(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            ))]),
                                        })],
                                    }))
                                    case '>>': return _pa.ss($, ($) => ({
                                        'state': ">>",
                                        'value': ['verbose group', _pa.dictionary_literal({
                                            'first': _pa.cc($['first'], ($) => Name_Or_String(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'rest': _pa.cc($['rest'], ($) => ['list', $.map(($) => Name_Or_String(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            ))]),
                                        })],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })])]),
        })]],
        () => ['not set', null]
    )]),
    'prolog': _pa.cc($['prolog'], ($) => ['list', $.map(($) => Processing_Instruction(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
    'syntax definition': _pa.cc($['syntax definition'], ($) => ['verbose group', _pa.dictionary_literal({
        'syntax productions': _pa.cc($['syntax productions'], ($) => ['verbose group', _pa.dictionary_literal({
            'first': _pa.cc($['first'], ($) => Syntax_Production(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'rest': _pa.cc($['rest'], ($) => ['list', $.map(($) => Syntax_Production(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))]),
        })]),
    })]),
})]
export const Lexical_Item: _i_signatures._T_Lexical_Item = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'lexical primary': _pa.cc($['lexical primary'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'char class': return _pa.ss($, ($) => ({
                'state': "char class",
                'value': ['verbose group', _pa.dictionary_literal({
                    'items': _pa.cc($['items'], ($) => ['verbose group', _pa.dictionary_literal({
                        'first': _pa.cc($['first'], ($) => Char_Class_Option(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'rest': _pa.cc($['rest'], ($) => ['list', $.map(($) => Char_Class_Option(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ))]),
                    })]),
                    'negated': _pa.cc($['negated'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['boolean'](
                            $,
                            null
                        ),
                    })]),
                })],
            }))
            case 'char code': return _pa.ss($, ($) => ({
                'state': "char code",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'end of input': return _pa.ss($, ($) => ({
                'state': "end of input",
                'value': ['nothing', null],
            }))
            case 'name or any character': return _pa.ss($, ($) => ({
                'state': "name or any character",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'any character ': return _pa.ss($, ($) => ({
                            'state': "any character ",
                            'value': ['nothing', null],
                        }))
                        case 'name': return _pa.ss($, ($) => ({
                            'state': "name",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            case 'parenthesized': return _pa.ss($, ($) => ({
                'state': "parenthesized",
                'value': ['verbose group', _pa.dictionary_literal({
                    'lexical choice': _pa.cc($['lexical choice'], ($) => ['verbose group', _pa.dictionary_literal({
                        'first': _pa.cc($['first'], ($) => Lexical_Sequence(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'rest': _pa.cc($['rest'], ($) => ['list', $.map(($) => Lexical_Sequence(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ))]),
                    })]),
                })],
            }))
            case 'string literal': return _pa.ss($, ($) => ({
                'state': "string literal",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'quantifier': _pa.cc($['quantifier'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'more than one': return _pa.ss($, ($) => ({
                    'state': "more than one",
                    'value': ['nothing', null],
                }))
                case 'multiple': return _pa.ss($, ($) => ({
                    'state': "multiple",
                    'value': ['nothing', null],
                }))
                case 'optional': return _pa.ss($, ($) => ({
                    'state': "optional",
                    'value': ['nothing', null],
                }))
                default: return _pa.au($[0])
            }
        })]],
        () => ['not set', null]
    )]),
})]
export const Lexical_Sequence: _i_signatures._T_Lexical_Sequence = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'first': _pa.cc($['first'], ($) => Lexical_Item(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'second': _pa.cc($['second'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'exclusion': return _pa.ss($, ($) => ({
                'state': "exclusion",
                'value': ['verbose group', _pa.dictionary_literal({
                    'what to exclude': _pa.cc($['what to exclude'], ($) => Lexical_Item(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'multiple': return _pa.ss($, ($) => ({
                'state': "multiple",
                'value': ['list', $.map(($) => Lexical_Item(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Name_Or_String: _i_signatures._T_Name_Or_String = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'name': return _pa.ss($, ($) => ({
            'state': "name",
            'value': ['verbose group', _pa.dictionary_literal({
                'context': _pa.cc($['context'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', Context(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
                'name': _pa.cc($['name'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'string': return _pa.ss($, ($) => ({
            'state': "string",
            'value': ['verbose group', _pa.dictionary_literal({
                'context': _pa.cc($['context'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', Context(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
                'string literal': _pa.cc($['string literal'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Processing_Instruction: _i_signatures._T_Processing_Instruction = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'dir pi contents': _pa.cc($['dir pi contents'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'name': _pa.cc($['name'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Syntax_Choice: _i_signatures._T_Syntax_Choice = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'first': _pa.cc($['first'], ($) => Syntax_Sequence(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'rest': _pa.cc($['rest'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'ordered': return _pa.ss($, ($) => ({
                    'state': "ordered",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'sequence': _pa.cc($['sequence'], ($) => ['list', $.map(($) => Syntax_Sequence(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ))]),
                    })],
                }))
                case 'unordered': return _pa.ss($, ($) => ({
                    'state': "unordered",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'sequence': _pa.cc($['sequence'], ($) => ['list', $.map(($) => Syntax_Sequence(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ))]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]],
        () => ['not set', null]
    )]),
})]
export const Syntax_Production: _i_signatures._T_Syntax_Production = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'name': _pa.cc($['name'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'options': _pa.cc($['options'], ($) => ['list', $.map(($) => Whitespace_Option(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
    'syntax choice': _pa.cc($['syntax choice'], ($) => Syntax_Choice(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Syntax_Sequence: _i_signatures._T_Syntax_Sequence = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'items': _pa.cc($['items'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'quantifier': _pa.cc($['quantifier'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case '*': return _pa.ss($, ($) => ({
                        'state': "*",
                        'value': ['nothing', null],
                    }))
                    case '+': return _pa.ss($, ($) => ({
                        'state': "+",
                        'value': ['nothing', null],
                    }))
                    case '?': return _pa.ss($, ($) => ({
                        'state': "?",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })]],
            () => ['not set', null]
        )]),
        'syntax primary': _pa.cc($['syntax primary'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'name or string': return _pa.ss($, ($) => ({
                    'state': "name or string",
                    'value': Name_Or_String(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ),
                }))
                case 'parenthesized': return _pa.ss($, ($) => ({
                    'state': "parenthesized",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'syntax choice': _pa.cc($['syntax choice'], ($) => Syntax_Choice(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })],
                }))
                case 'processing instruction': return _pa.ss($, ($) => ({
                    'state': "processing instruction",
                    'value': Processing_Instruction(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ),
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])]),
})]
export const Whitespace_Option: _i_signatures._T_Whitespace_Option = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'definition': return _pa.ss($, ($) => ({
            'state': "definition",
            'value': ['nothing', null],
        }))
        case 'explicit': return _pa.ss($, ($) => ({
            'state': "explicit",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
