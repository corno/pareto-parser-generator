import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/railroad_diagram/marshall"


export const Char_Class_Element: _i_signatures._T_Char_Class_Element = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
            'value': Char_Code(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'char code range': return _pa.ss($, ($) => ({
            'state': "char code range",
            'value': ['verbose group', _pa.dictionary_literal({
                'from': _pa.cc($['from'], ($) => Char_Code(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'to': _pa.cc($['to'], ($) => Char_Code(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
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
export const Char_Code: _i_signatures._T_Char_Code = ($, $p) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
export const Choice: _i_signatures._T_Choice = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'first': _pa.cc($['first'], ($) => Composite_Expression(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'rest': _pa.cc($['rest'], ($) => ['list', $.map(($) => Composite_Expression(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
})]
export const Composite_Expression: _i_signatures._T_Composite_Expression = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'items': _pa.cc($['items'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'item': _pa.cc($['item'], ($) => Item(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'tail': _pa.cc($['tail'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'siblings': return _pa.ss($, ($) => ({
                        'state': "siblings",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'items': _pa.cc($['items'], ($) => ['list', $.map(($) => Item(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ))]),
                        })],
                    }))
                    case 'special': return _pa.ss($, ($) => ({
                        'state': "special",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'item': _pa.cc($['item'], ($) => Item(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'operator': _pa.cc($['operator'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case '**': return _pa.ss($, ($) => ({
                                        'state': "**",
                                        'value': ['nothing', null],
                                    }))
                                    case '++': return _pa.ss($, ($) => ({
                                        'state': "++",
                                        'value': ['nothing', null],
                                    }))
                                    case '-': return _pa.ss($, ($) => ({
                                        'state': "-",
                                        'value': ['nothing', null],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })]],
            () => ['not set', null]
        )]),
    })])]),
})]
export const Grammar: _i_signatures._T_Grammar = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'productions': _pa.cc($['productions'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'definition': _pa.cc($['definition'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'choice': return _pa.ss($, ($) => ({
                    'state': "choice",
                    'value': Choice(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ),
                }))
                case 'link': return _pa.ss($, ($) => ({
                    'state': "link",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'url': _pa.cc($['url'], ($) => ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })]),
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
        'name': _pa.cc($['name'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
})]
export const Item: _i_signatures._T_Item = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'primary': _pa.cc($['primary'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'char class': return _pa.ss($, ($) => ({
                'state': "char class",
                'value': ['verbose group', _pa.dictionary_literal({
                    'first': _pa.cc($['first'], ($) => Char_Class_Element(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'negated': _pa.cc($['negated'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['boolean'](
                            $,
                            null
                        ),
                    })]),
                    'rest': _pa.cc($['rest'], ($) => ['list', $.map(($) => Char_Class_Element(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    ))]),
                })],
            }))
            case 'char code': return _pa.ss($, ($) => ({
                'state': "char code",
                'value': Char_Code(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'choice': return _pa.ss($, ($) => ({
                'state': "choice",
                'value': Choice(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'name': return _pa.ss($, ($) => ({
                'state': "name",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'string literal': return _pa.ss($, ($) => ({
                'state': "string literal",
                'value': String_Literal(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            default: return _pa.au($[0])
        }
    })]),
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
})]
export const String_Literal: _i_signatures._T_String_Literal = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'delimiter': _pa.cc($['delimiter'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'apostrophe': return _pa.ss($, ($) => ({
                'state': "apostrophe",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'quote': return _pa.ss($, ($) => ({
                'state': "quote",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
