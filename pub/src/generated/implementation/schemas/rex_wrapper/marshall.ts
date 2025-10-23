import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/rex_wrapper/marshall"


export const Fixed_token_sequence: _i_signatures._T_Fixed_token_sequence = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'alternatives': return _pa.ss($, ($) => ({
                'state': "alternatives",
                'value': ['dictionary', $.map(($) => Fixed_token_sequence(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))],
            }))
            case 'optional': return _pa.ss($, ($) => ({
                'state': "optional",
                'value': Fixed_token_sequence(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'token': return _pa.ss($, ($) => ({
                'state': "token",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})])]
export const Grammar: _i_signatures._T_Grammar = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'dynamic tokens': _pa.cc($['dynamic tokens'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    })])]),
    'types': _pa.cc($['types'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'node': _pa.cc($['node'], ($) => Type_Node(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })])]),
})]
export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'component': return _pa.ss($, ($) => ({
                'state': "component",
                'value': ['verbose group', _pa.dictionary_literal({
                    'prefix': _pa.cc($['prefix'], ($) => Fixed_token_sequence(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'type': _pa.cc($['type'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                })],
            }))
            case 'group': return _pa.ss($, ($) => ({
                'state': "group",
                'value': ['verbose group', _pa.dictionary_literal({
                    'properties': _pa.cc($['properties'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                        'node': _pa.cc($['node'], ($) => Type_Node(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'prefix': _pa.cc($['prefix'], ($) => Fixed_token_sequence(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })])]),
                })],
            }))
            case 'list': return _pa.ss($, ($) => ({
                'state': "list",
                'value': ['verbose group', _pa.dictionary_literal({
                    'elements': _pa.cc($['elements'], ($) => Type_Node(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'prefix': _pa.cc($['prefix'], ($) => Fixed_token_sequence(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'separator': _pa.cc($['separator'], ($) => Fixed_token_sequence(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'suffix': _pa.cc($['suffix'], ($) => Fixed_token_sequence(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'optional': return _pa.ss($, ($) => ({
                'state': "optional",
                'value': ['verbose group', _pa.dictionary_literal({
                    'not set': _pa.cc($['not set'], ($) => ['verbose group', _pa.dictionary_literal({
                        'tokens': _pa.cc($['tokens'], ($) => Fixed_token_sequence(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })]),
                    'set': _pa.cc($['set'], ($) => ['verbose group', _pa.dictionary_literal({
                        'node': _pa.cc($['node'], ($) => Type_Node(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'prefix': _pa.cc($['prefix'], ($) => Fixed_token_sequence(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })]),
                })],
            }))
            case 'state group': return _pa.ss($, ($) => ({
                'state': "state group",
                'value': ['verbose group', _pa.dictionary_literal({
                    'prefix': _pa.cc($['prefix'], ($) => Fixed_token_sequence(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'states': _pa.cc($['states'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                        'node': _pa.cc($['node'], ($) => Type_Node(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                        'prefix': _pa.cc($['prefix'], ($) => Fixed_token_sequence(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )),
                    })])]),
                })],
            }))
            case 'text': return _pa.ss($, ($) => ({
                'state': "text",
                'value': ['verbose group', _pa.dictionary_literal({
                    'dynamic token': _pa.cc($['dynamic token'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'prefix': _pa.cc($['prefix'], ($) => Fixed_token_sequence(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
